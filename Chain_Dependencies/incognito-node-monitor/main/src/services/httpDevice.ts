import axios from 'axios';
import { API_BASE_URL_DEVICE } from './configs';

const HEADERS = { 'Content-Type': 'application/json' };
const TIMEOUT = 20000;

const instance = axios.create({
    baseURL: API_BASE_URL_DEVICE,
    timeout: TIMEOUT,
    headers: {
        ...HEADERS,
        Authorization: '',
    },
});

instance.interceptors.response.use(
    (res) => {
        const result = res?.data?.Result;
        return Promise.resolve(result);
    },
    (errorData) => {
        return Promise.reject(errorData);
    },
);

export default instance;
