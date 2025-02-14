/* eslint-disable */
import AccountWallet from './accountWallet';
import WebJSAccount from './webJSAccount';

class Wallet {
  Seed: [];

  Entropy: [];

  PassPhrase: string;

  Mnemonic: string;

  MasterAccount: AccountWallet;

  constructor() {
    this.Seed = [];
    this.Entropy = [];
    this.PassPhrase = '';
    this.Mnemonic = '';
    this.MasterAccount = new AccountWallet();
  }

  init(passPhrase: string, numOfAccount = 1, name = '') {

  }

  getAccountByName(accountName: string): AccountWallet | null {
    return null;
  }

  getAccountIndexByName(accountName: string): number {
    return 0;
  }

  createNewAccount(accountName: string, shardID?: number): AccountWallet | null {
    return null;
  }

  removeAccount(privateKey: string, passPhrase: string): void {

  }

  importAccount(privateKey: string, accountName: string, passPhrase: string): AccountWallet | null {
    return null;
  }

  async getHistoryByAccount(accName: string) {

  }

  async loadWallet(password: string) {

  }

  async loadAccountsCached(accName = null) {

  }

  save(pass: string) {

  }

  listAccount(): Promise<WebJSAccount[]> {
    return Promise.resolve([]);
  }

  static ProgressTx = 0;

  static ShardNumber = 8;
}

export default Wallet;
