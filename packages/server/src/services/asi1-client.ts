import { GoogleGenAI } from '@google/genai';
import { ASI1Message, ASI1Response, ASI1_DEFAULTS } from '@devpilot/shared';
import { config } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { stripCodeFences } from '../utils/code-parser.js';
import { countTokens } from '../utils/token-counter.js';
import crypto from 'crypto';

function mapMessages(messages: ASI1Message[]) {
  const systemInstruction = messages
    .filter((m) => m.role === 'system')
    .map((m) => m.content)
    .join('\n');

  const chatMessages: any[] = [];
  const nonSystem = messages.filter((m) => m.role !== 'system');
  
  for (const m of nonSystem) {
    const role = m.role === 'assistant' ? 'model' : 'user';
    if (chatMessages.length > 0 && chatMessages[chatMessages.length - 1].role === role) {
       chatMessages[chatMessages.length - 1].parts[0].text += '\n\n' + m.content;
    } else {
       chatMessages.push({
         role,
         parts: [{ text: m.content }],
       });
    }
  }

  // Gemini needs at least one user message
  if (chatMessages.length === 0) {
    chatMessages.push({ role: 'user', parts: [{ text: 'Hello' }] });
  }

  return { systemInstruction: systemInstruction || undefined, contents: chatMessages };
}

export class ASI1Client {
  private ai: GoogleGenAI;
  private model: string;
  private concurrentRequests = 0;
  private maxConcurrent = ASI1_DEFAULTS.MAX_CONCURRENT_REQUESTS;
  private waitQueue: Array<() => void> = [];

  constructor() {
    this.model = config.GEMINI_MODEL || 'gemini-flash-latest';
    this.ai = new GoogleGenAI({ apiKey: config.GEMINI_API_KEY });
  }

  async chat(
    messages: ASI1Message[],
    options: { temperature?: number; max_tokens?: number; top_p?: number } = {}
  ): Promise<ASI1Response> {
    await this.waitForSlot();
    try {
      const { systemInstruction, contents } = mapMessages(messages);
      logger.info('Gemini request', { messageCount: messages.length, tokenEstimate: countTokens(messages.map(m => m.content).join('')) });

      const response = await this.retryWithBackoff(async () => {
        return await this.ai.models.generateContent({
          model: this.model,
          contents,
          config: {
            systemInstruction,
            temperature: options.temperature ?? ASI1_DEFAULTS.TEMPERATURE,
            topP: options.top_p ?? ASI1_DEFAULTS.TOP_P,
            maxOutputTokens: options.max_tokens ?? ASI1_DEFAULTS.MAX_TOKENS
          }
        });
      }, ASI1_DEFAULTS.MAX_RETRIES);

      logger.info('Gemini response', { status: 'success' });
      
      return {
        id: crypto.randomUUID(),
        choices: [
          {
            message: { role: 'assistant', content: response.text || '' },
            finish_reason: 'stop'
          }
        ],
        usage: {
          prompt_tokens: response.usageMetadata?.promptTokenCount || 0,
          completion_tokens: response.usageMetadata?.candidatesTokenCount || 0,
          total_tokens: response.usageMetadata?.totalTokenCount || 0,
        }
      };
    } finally {
      this.releaseSlot();
    }
  }

  async *chatStream(
    messages: ASI1Message[],
    options: { temperature?: number; max_tokens?: number } = {},
    signal?: AbortSignal
  ): AsyncGenerator<string> {
    await this.waitForSlot();
    try {
      const { systemInstruction, contents } = mapMessages(messages);

      const responseStream = await this.ai.models.generateContentStream({
        model: this.model,
        contents,
        config: {
          systemInstruction,
          temperature: options.temperature ?? ASI1_DEFAULTS.TEMPERATURE,
          topP: ASI1_DEFAULTS.TOP_P,
          maxOutputTokens: options.max_tokens ?? ASI1_DEFAULTS.MAX_TOKENS
        }
      });

      for await (const chunk of responseStream) {
        if (signal?.aborted) return;
        if (chunk.text) {
          yield chunk.text;
        }
      }
    } catch (err) {
      if (signal?.aborted) return;
      throw err;
    } finally {
      this.releaseSlot();
    }
  }

  async analyzeCode(code: string, instruction: string, systemPrompt: string): Promise<string> {
    const messages: ASI1Message[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `${instruction}\n\n\`\`\`\n${code}\n\`\`\`` },
    ];

    const response = await this.chat(messages, {
      temperature: 0.2,
      max_tokens: ASI1_DEFAULTS.MAX_TOKENS,
    });

    return response.choices[0]?.message?.content || '';
  }

  async completeCode(
    prefix: string,
    suffix: string,
    language: string,
    fileContext?: string
  ): Promise<string> {
    const systemPrompt = `You are an expert ${language} code completion engine. You will be given code with a cursor position marked as <CURSOR>. Output ONLY the code that should be inserted at the cursor position. Do not include any explanation, markdown formatting, or the surrounding code. Output raw code only.`;

    const userContent = fileContext
      ? `${fileContext}\n\n// Current file:\n${prefix}<CURSOR>${suffix}`
      : `${prefix}<CURSOR>${suffix}`;

    const messages: ASI1Message[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userContent },
    ];

    const response = await this.chat(messages, {
      temperature: 0.3,
      max_tokens: 256,
    });

    const content = response.choices[0]?.message?.content || '';
    return stripCodeFences(content);
  }

  private async waitForSlot(): Promise<void> {
    if (this.concurrentRequests < this.maxConcurrent) {
      this.concurrentRequests++;
      return;
    }
    return new Promise((resolve) => {
      this.waitQueue.push(() => {
        this.concurrentRequests++;
        resolve();
      });
    });
  }

  private releaseSlot(): void {
    this.concurrentRequests--;
    const next = this.waitQueue.shift();
    if (next) next();
  }

  private async retryWithBackoff<T>(fn: () => Promise<T>, maxRetries: number): Promise<T> {
    const delays = ASI1_DEFAULTS.RETRY_DELAYS;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error: any) {
        if (attempt === maxRetries) throw error;

        let delay = delays[attempt] || 4000;
        // Simple backoff
        logger.warn(`Gemini request failed (attempt ${attempt + 1}/${maxRetries + 1}), retrying in ${delay}ms`, {
          message: error.message,
        });

        await new Promise((r) => setTimeout(r, delay));
      }
    }
    throw new Error('Retry exhausted');
  }
}

export const asi1 = new ASI1Client();
