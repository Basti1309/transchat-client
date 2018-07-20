import { API } from '../middlewares/api';

export const textToStore = (data) => ({
  type: 'TEXT_TO_STORE',
  message: data,
});

export const startMicRecord = () => ({
  type: 'START_MIC_RECORD',
  [API]: {
    endpoint: '/record',
    method: 'GET',
  },
});

export const languageCode = (data) => ({
  type: 'LANGUAGE_CODE',
  [API]: {
    endpoint: `/speechlang?speaker=${data.speakerLang}&translation=${data.translationLang}`,
    method: 'POST',
  },
});

export const socketConnect = () => ({
  type: 'SOCKET_CONNECTION',
  [API]: {
    endpoint: '/socketconnect',
    method: 'GET',
  },
});
