import Wallet from 'src/models/wallet';
import PaymentInfo from 'src/models/paymentInfo';
import SubmitParams from '../models/submitParams';
import { getPassphrase } from './password';

export async function createAccount(wallet: Wallet, accountName: string, shardId?: number) {
  try {
    return await wallet.createNewAccount(accountName, shardId);
  } catch (error) {
    console.debug('CREATE ACCOUNT ERROR', error);
    return null;
  }
}

export function importAccount(wallet: Wallet, privateKey: string, accountName: string) {
  try {
    const passPhrase = getPassphrase();
    wallet.importAccount(privateKey, accountName, passPhrase);
    return true;
  } catch (error) {
    console.debug('IMPORT ERROR', error);
    return false;
  }
}

export function removeAccount(wallet: Wallet, privateKey: string, passPhrase: string) {
  return wallet.removeAccount(privateKey, passPhrase);
}

export function getAllAccounts(wallet: Wallet) {
  return wallet.listAccount();
}

export function getBalance(wallet: Wallet, name: string, tokenId: string): Promise<number> {
  const indexAccount = wallet.getAccountIndexByName(name);
  return wallet.MasterAccount.child[indexAccount].getBalance(tokenId);
}

export function createAndSendNativeToken(
  wallet: Wallet,
  paymentInfos: PaymentInfo[],
  fee = 0,
  isPrivacy = true,
  accountName = '',
) {
  const indexAccount = wallet.getAccountIndexByName(accountName);
  const infoStr = undefined;
  return wallet.MasterAccount.child[
    indexAccount
  ].createAndSendNativeToken(paymentInfos, fee, isPrivacy, infoStr);
}

export function createSendPToken(
  wallet: Wallet,
  submitParam: SubmitParams,
  feeNativeToken = 0,
  accountName = '',
  paymentInfo: PaymentInfo,
  feePToken = 0,
) {
  const indexAccount = wallet.getAccountIndexByName(accountName);
  const paymentInfos = paymentInfo ? [paymentInfo] : [];
  const hasPrivacyForNativeToken = true;
  const hasPrivacyForPToken = true;
  const infoStr = undefined;
  return wallet.MasterAccount.child[indexAccount]
    .createAndSendPrivacyToken(
      paymentInfos,
      submitParam,
      feeNativeToken,
      feePToken,
      hasPrivacyForNativeToken,
      hasPrivacyForPToken,
      infoStr,
    );
}
