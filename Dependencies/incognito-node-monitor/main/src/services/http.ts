import axios from 'axios';
import { API_BASE_URL } from './configs';
import { getDeviceId } from '../configs/Configs.utils';
import { fetchAccessToken, getAccessToken, setAccessToken } from '../configs/Configs.services';

let currentAccessToken = getAccessToken();

const TIMEOUT = 20000;
const instance = axios.create({
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (req) => {
        req.baseURL = API_BASE_URL;
        req.headers = {
            ...req.headers,
            Authorization: `Bearer ${currentAccessToken}`,
        };
        return req;
    },
    (error) => {
        Promise.reject(error);
    },
);

export const setTokenHeader = async () => {
    const deviceId = getDeviceId();
    const accessToken = await fetchAccessToken(deviceId);
    if (!accessToken) {
        throw new Error('Can not set token request');
    }
    setAccessToken(accessToken);
    currentAccessToken = accessToken;
    axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

instance.interceptors.response.use(
    (res) => {
        const result = res?.data?.Result;
        const error = res?.data?.Error;
        if (error) {
            return Promise.reject(error);
        }
        return Promise.resolve(result);
    },
    async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 401) {
            console.debug('Token was expired!');
            await setTokenHeader();
            return instance(originalRequest);
        }
        if (error?.isAxiosError && !error?.response) {
            throw new Error('Send request API failed');
        }
        return Promise.reject(error);
    },
);

export default instance;
