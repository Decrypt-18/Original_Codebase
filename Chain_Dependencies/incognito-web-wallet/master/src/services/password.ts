import CryptoJS from 'crypto-js';
import { CONSTANT_CONFIGS, CONSTANT_KEYS } from 'src/constants';
import storage from 'src/services/storage';

const PASSWORD_DURATION_IN_MS = 7 * 24 * 3600 * 1000; // 7 days

export function clearPassword() {
  storage.removeItem(CONSTANT_KEYS.PASSPHRASE_KEY);
}

export function getPassphrase() {
  try {
    let pass: string = storage.getItem(CONSTANT_KEYS.PASSPHRASE_KEY) || '';

    if (!pass) {
      return;
    }

    pass = CryptoJS.AES.decrypt(
      pass,
      CONSTANT_CONFIGS.PASSWORD_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);
    const [password, expired] = pass.split(':');
    if (!password || !expired) return;
    return password;
  } catch (e) {
    return;
  }
}

export function hasPassword() {
  return !!getPassphrase();
}

export function savePassword(pass: string) {
  try {
    const expired = Date.now() + PASSWORD_DURATION_IN_MS;
    const toBeSaved = CryptoJS.AES.encrypt(
      `${pass}:${expired}`,
      CONSTANT_CONFIGS.PASSWORD_SECRET_KEY
    ).toString();
    return storage.setItem(CONSTANT_KEYS.PASSPHRASE_KEY, toBeSaved);
  } catch {
    throw new Error('Can not save your password, please try again');
  }
}
