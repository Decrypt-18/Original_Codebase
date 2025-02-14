import { v4 } from 'uuid';
import { Storage, STORAGE_KEYS } from 'src/services/storage';

export const getDeviceId = () => {
    let deviceId = Storage.getItem(STORAGE_KEYS.DEVICE_ID);
    if (!deviceId) {
        deviceId = v4();
        Storage.setItem(STORAGE_KEYS.DEVICE_ID, deviceId);
    }
    return deviceId;
};
