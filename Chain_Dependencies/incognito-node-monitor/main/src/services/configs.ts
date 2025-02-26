import { getHomeConfig } from 'src/global';

const homeConfig = getHomeConfig();

export const isMainnet = homeConfig.isMainnet ?? true;

export const API_BASE_URL = isMainnet
    ? 'https://api-service.incognito.org'
    : 'https://staging-api-service.incognito.org';

export const API_BASE_URL_DEVICE = isMainnet
    ? 'https://device-network.incognito.org/'
    : 'https://device-network-staging.incognito.org/';

export const ETH_TOKEN_ID = isMainnet
    ? 'ffd8d42dc40a8d166ea4848baf8b5f6e912ad79875f4373070b59392b1756c8f'
    : 'ffd8d42dc40a8d166ea4848baf8b5f6e9fe0e9c30d60062eb7d44a8df9e00854';
