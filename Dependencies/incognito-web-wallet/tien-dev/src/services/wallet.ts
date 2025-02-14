// @ts-ignore
import { RpcClient, Wallet } from 'incognito-chain-web-js/build/wallet';
import randomBytes from 'randombytes';
import AccountModel from 'src/models/account';
import storage from 'src/services/storage';
import { getPassphrase, savePassword } from 'src/services/password';
import WebJSAccount from 'src/models/webJSAccount';
import { getMaxShardNumber } from './rpc';
import { CONSTANT_CONFIGS } from '../constants';

const numOfAccount = 1;
const walletName = 'wallet1';

export async function loadListAccount(wallet: any) {
  const listAccountRaw = (await wallet.listAccount()) || [];
  return listAccountRaw.map((account: WebJSAccount) => new AccountModel(account)) || [];
}

export async function loadWallet() {
  const passphrase = CONSTANT_CONFIGS.PASSPHRASE_WALLET_DEFAULT;
  Wallet.RandomBytesFunc = randomBytes;
  Wallet.setPrivacyUtilRandomBytesFunc(randomBytes);
  Wallet.RpcClient = new RpcClient(
    CONSTANT_CONFIGS.MASTER_NODE_ADDRESS,
    '',
    '',
  );
  Wallet.ShardNumber = await getMaxShardNumber();
  const wallet = new Wallet();
  wallet.Storage = storage;
  await wallet.loadWallet(passphrase);
  return wallet?.Name ? wallet : false;
}

export async function initWallet() {
  savePassword(CONSTANT_CONFIGS.PASSPHRASE_WALLET_DEFAULT);
  const passphrase = getPassphrase();
  const wallet = new Wallet();
  wallet.init(passphrase, numOfAccount, walletName);
  wallet.Storage = storage;
  await wallet.save(passphrase);
  return wallet;
}

export async function saveWallet(wallet: any) {
  wallet.save(getPassphrase());
}

export function deleteWallet(wallet: any) {
  return wallet.deleteWallet();
}

export async function updateStatusHistory(wallet: any) {
  await wallet.updateStatusHistory();
  await saveWallet(wallet);
}

export async function loadHistoryByAccount(wallet: any, accountName: string) {
  await updateStatusHistory(wallet).catch(() => console.warn('History statuses were not updated'));
  return (await wallet.getHistoryByAccount(accountName)) || [];
}

export function clearCache(wallet: any) {
  wallet.clearCached();
}
