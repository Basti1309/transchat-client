import { API } from '../middlewares/api';

export const textToStore = (data) => ({
  type: 'TEXT_TO_STORE',
  message: data,
});

export const startMicRecord = () => ({
  type: 'START_MIC_RECORD',
  [API]: {
    endpoint: '/',
    method: 'GET',
  },
});

export const languageCode = (language) => ({
  type: 'LANGUAGE_CODE',
  [API]: {
    endpoint: `/speechlang?lng=${language}`,
    method: 'POST',
  },
});
