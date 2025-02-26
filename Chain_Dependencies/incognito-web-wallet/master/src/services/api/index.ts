import axios from 'axios';
import { CONSTANT_CONFIGS, CONSTANT_KEYS } from 'src/constants';
import storageService from 'src/services/storage';
import { login } from './auth';

const HEADERS = { 'Content-Type': 'application/json' };
const TIMEOUT = 20000;

const instance = axios.create({
  baseURL: CONSTANT_CONFIGS.API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    ...HEADERS,
    Authorization: ''
  }
});

instance.interceptors.request.use((config: any) => {
  const token = storageService.getItem(CONSTANT_KEYS.DEVICE_TOKEN) || '';
  return {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': 'Bearer ' + token,
    }
  };
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use((res: any): any => {
  res.data = res?.data?.Result;
  return Promise.resolve(res);
}, (errorData: any) => {
  const errResponse = errorData?.response;
  const originalRequest = errorData?.config;

  if (errResponse?.status === 401) {
    return new Promise(async (resolve) => {
      const newToken = await login(true);
      originalRequest.headers.Authorization = 'Bearer ' + newToken;
      storageService.setItem(CONSTANT_KEYS.DEVICE_TOKEN, newToken);
      resolve(instance(originalRequest));
    });
  }

  const data = errResponse?.data;
  return Promise.reject(data);
});

export default instance;
