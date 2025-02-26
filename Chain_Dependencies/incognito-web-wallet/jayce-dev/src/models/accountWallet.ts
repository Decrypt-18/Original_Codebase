/* eslint-disable */
import PaymentInfo from './paymentInfo';
import SubmitParams from './submitParams';

type Transaction = {
  txID: string,
}

type History = {
  NormalTx: Transaction[],
  PrivacyTokenTx: Transaction[],
}

type Token = {
  ID: string,
  Image: string,
  Name: string,
  Symbol: string,
  Amount: number,
  IsPrivacy: boolean,
  isInit: boolean,
  metaData: object
}

class AccountWallet {
  name: string;
  followingTokens: [];
  txHistory: History;
  txReceivedHistory: History;
  child: AccountWallet[];

  constructor() {
    this.name = "";
    this.followingTokens = [];
    this.txHistory = { NormalTx: [], PrivacyTokenTx: [] };
    this.txReceivedHistory = { NormalTx: [], PrivacyTokenTx: [] };
    this.child = [];
  };

  // listFollowingTokens returns list of following tokens
  listFollowingTokens() {
  };

  // addFollowingToken adds token data array to following token list
  addFollowingToken(...tokenData: Token[]) {

  };

  // removeFollowingToken removes token which has tokenId from list of following tokens
  removeFollowingToken(tokenId: string) {

  }

  // getNormalTxHistory return history of normal txs
  getNormalTxHistory(): Transaction[] {
    return [];
  };

  // getPrivacyTokenTxHistory return history of normal txs
  getPrivacyTokenTxHistory() {

  };

  async getBalance(tokenID?: string): Promise<number> {
    return 0;
  }

  async createAndSendNativeToken(
    paramPaymentInfos: PaymentInfo[],
    fee = 0,
    isPrivacy = true,
    info = "",
    isEncryptMessageOutCoin = true
  ) {

  };

  async createAndSendPrivacyToken(
    paramPaymentInfosForNativeToken: PaymentInfo[],
    submitParam: SubmitParams,
    feeNativeToken = 0,
    feePToken = 0,
    hasPrivacyForNativeToken = true,
    hasPrivacyForPToken = true,
    info = "",
    isEncryptMessageOutCoinNativeToken = true,
    isEncryptMessageOutCoinPToken = true) {

  };
}

export default AccountWallet;
