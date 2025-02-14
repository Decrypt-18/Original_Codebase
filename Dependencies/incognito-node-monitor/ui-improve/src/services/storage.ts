export const STORAGE_KEYS = {
    HOME_CONFIGS: '$home-config',
    P_TOKEN: '$p-token',
    P_CUSTOM_TOKEN: '$p-custom-token',
    P_DESTATE: '$p-destate',
    TOKEN: '$access-token',
    DEVICE_ID: '$device-id',
    DECIMAL_SEPARATOR: '$decimal_separator',
};

export const DECIMAL_SEPARATOR = '.';
export const GROUP_SEPARATOR = ',';

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

export const saveLocalDecimalSeparator = (separator: string) => {
    return Storage.setItem(STORAGE_KEYS.DECIMAL_SEPARATOR, separator);
};

export const getLocalDecimalSeparator = () => {
    return Storage.getItem(STORAGE_KEYS.DECIMAL_SEPARATOR) || DECIMAL_SEPARATOR;
};
