import { isMainnet } from 'src/configs/Configs.Envs';

export const API_BASE_URL_DEVICE = isMainnet
    ? 'https://device-network.incognito.org/'
    : 'https://device-network-staging.incognito.org/';

export const API_NODE_BASE_URL = isMainnet ? 'http://51.91.72.45:3333/' : 'http://139.162.54.236:3333/';

export const API_NODE_MONITOR_URL = `${API_NODE_BASE_URL}pubkeystat/`;

export const API_NODE_VALIDATOR_URL = isMainnet ? `${API_NODE_BASE_URL}validator/` : `${API_NODE_BASE_URL}validator/`;
