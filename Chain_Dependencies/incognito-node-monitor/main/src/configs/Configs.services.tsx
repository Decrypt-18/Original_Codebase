import http from 'src/services/http';
import { Storage, STORAGE_KEYS } from 'src/services/storage';

export const getAccessToken = () => {
    return Storage.getItem(STORAGE_KEYS.TOKEN) || '';
};

export const setAccessToken = (token: string) => {
    Storage.setItem(STORAGE_KEYS.TOKEN, token);
};

export const fetchAccessToken = (deviceId: string) => {
    if (!deviceId) throw new Error('Missing device ID');
    return http
        .post('/auth/new-token', {
            DeviceID: deviceId,
            DeviceToken: deviceId,
        })
        .then((res: any) => res?.Token);
};
