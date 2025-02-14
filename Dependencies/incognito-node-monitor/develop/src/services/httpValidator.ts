import axios from 'axios';
import { API_NODE_VALIDATOR_URL } from './configs';

const TIMEOUT = 20000;
const instanceValidator = axios.create({
    timeout: TIMEOUT,
});

const HEADERS = {};

instanceValidator.interceptors.request.use(
    (req) => {
        req.baseURL = API_NODE_VALIDATOR_URL;
        req.headers = {
            ...HEADERS,
            ...req.headers,
        };
        return req;
    },
    (error) => {
        Promise.reject(error);
    },
);

instanceValidator.interceptors.response.use(
    (res) => {
        const result = res?.data;
        const error = res?.data?.Error;
        if (error) {
            return Promise.reject(error);
        }
        return Promise.resolve(result);
    },
    async (error) => {
        if (error?.isAxiosError && !error?.response) {
            throw new Error('Send request API failed');
        }
        return Promise.reject(error);
    },
);

export default instanceValidator;
