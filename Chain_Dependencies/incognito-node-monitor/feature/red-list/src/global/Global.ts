import { IServer, MAINNET_SERVER } from 'src/services/server';
import { STORAGE_KEYS, Storage } from 'src/services/storage';

declare global {
    namespace NodeJS {
        interface Global {
            homeConfig: IServer;
            isMainnet: boolean;
        }
    }
}

export const getHomeConfig = () => {
    const homeConfig: any = Storage.getItem(STORAGE_KEYS.HOME_CONFIGS) || MAINNET_SERVER;
    const isMainnet = homeConfig?.id === 'mainnet';
    return { homeConfig, isMainnet };
};

export const setHomeConfig = () => {};
