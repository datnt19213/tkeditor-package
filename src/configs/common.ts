import { Model } from '../components/editor/settings';

export const models: Model[] = [
  { label: 'gpt-4o-mini', value: 'gpt-4o-mini' },
  { label: 'gpt-4o', value: 'gpt-4o' },
  { label: 'gpt-4-turbo', value: 'gpt-4-turbo' },
  { label: 'gpt-4', value: 'gpt-4' },
  { label: 'gpt-3.5-turbo', value: 'gpt-3.5-turbo' },
  { label: 'gpt-3.5-turbo-instruct', value: 'gpt-3.5-turbo-instruct' },
  { label: 'openai/gpt-4o', value: 'openai/gpt-4o' },
];


export const CONFIGS = {
  API_KEY: process.env.OPENAI_API_KEY,
  MODEL: models[4].value,
  WEBSITE_URL: process.env.WEBSITE_URL,
}
