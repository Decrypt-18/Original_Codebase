import { CONSTANT_KEYS } from 'src/constants';
import storageService from 'src/services/storage';
import api from './index';

export const getToken = async (): Promise<string> => {
  return api.post('/auth/new-token', { DeviceID: 'id', DeviceToken: 'firebase' })
    .then((data: any) => data.Token);
};

export const login = async (fresh = false): Promise<string> => {
  let token;
  if (!fresh) {
    token = storageService.getItem(CONSTANT_KEYS.DEVICE_TOKEN);
  }

  if (!token) {
    const newToken = await getToken();
    storageService.setItem(CONSTANT_KEYS.DEVICE_TOKEN, newToken);
    token = newToken;
  }

  return token;
};
