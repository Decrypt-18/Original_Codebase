export const STORAGE_KEYS = {
    HOME_CONFIGS: '$home-config',
    P_TOKEN: '$p-token',
    P_CUSTOM_TOKEN: '$p-custom-token',
    P_DESTATE: '$p-destate',
    TOKEN: '$access-token',
    DEVICE_ID: '$device-id',
};

export const Storage = {
    setItem(key: string, value: string) {
        console.debug('SET ITEM', key);
        localStorage.setItem(key, value);
    },
    getItem(key: string) {
        console.debug('GET ITEM', key);
        const result = localStorage.getItem(key);
        return result || null;
    },
    removeItem(key: string) {
        console.debug('REMOVE ITEM', key);
        localStorage.removeItem(key);
    },
};
