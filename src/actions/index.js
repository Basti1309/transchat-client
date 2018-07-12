import { API } from '../middlewares/api';

export const textToStore = (data) => ({
  type: 'TEXT_TO_STORE',
  message: data,
});

export const startMicRecord = () => ({
  type: 'START_MIC_RECORD',
  [API]: {
    endpoints: '/',
    method: 'GET',
  },
});
