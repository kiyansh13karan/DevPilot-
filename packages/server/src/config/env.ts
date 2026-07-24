import dotenv from 'dotenv';
dotenv.config();

interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  CLIENT_URL: string;
  GEMINI_API_KEY: string;
  GEMINI_MODEL: string;
  GITHUB_TOKEN: string;
  REDIS_URL: string;
  LOG_LEVEL: string;
  IDE_PASSCODE: string;
}

function required(key: string): string {
  const value = process.env[key];
  if (!value && process.env.NODE_ENV === 'production') {
    // Suppress crash to allow the ide to boot without AI features
    // throw new Error(`Missing required environment variable: ${key}`);
    return '';
  }
  return value || '';
}

export const config: EnvConfig = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.NODE_ENV === 'production' ? 7860 : parseInt(process.env.PORT || '3001', 10),
  CLIENT_URL: process.env.NODE_ENV === 'production' ? 'http://localhost:7860' : (process.env.CLIENT_URL || 'http://localhost:5173'),
  GEMINI_API_KEY: required('GEMINI_API_KEY'),
  GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-flash-latest',
  GITHUB_TOKEN: process.env.GITHUB_TOKEN || '',
  REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  IDE_PASSCODE: process.env.IDE_PASSCODE || 'devpilot123',
};
