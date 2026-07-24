import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '../../.env') });

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function listModels() {
  try {
    const response = await ai.models.list();
    let models = [];
    for await (const model of response) {
        models.push(model.name);
    }
    console.log("AVAILABLE MODELS:", models);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

listModels();
