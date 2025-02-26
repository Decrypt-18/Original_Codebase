import COMMON_TOKENS from './commonToken';

export default {
  COMMON_TOKENS,
  // TOKEN_TX_TYPE: {
  //   INIT: 0,
  //   SEND: 1
  // },
  // ADDRESS_TYPE: {
  //   DEPOSIT: 1,
  //   WITHDRAW: 2
  // },
  PRIVATE_TOKEN_CURRENCY_TYPE: {
    ETH: 1,
    BTC: 2,
    ERC20: 3,
    BNB: 4,
    BNB_BEP2: 5,
    USD: 6
  },
  PRIVATE_TOKEN_TYPE: {
    COIN: 0,
    TOKEN: 1 // including ERC20, BEP1, BEP2,...
  },
  // HISTORY: {
  //   TYPE: {
  //     DEPOSIT: 1, // same with PRIVATE_TOKEN_HISTORY_ADDRESS_TYPE.DEPOSIT
  //     WITHDRAW: 2, // same with PRIVATE_TOKEN_HISTORY_ADDRESS_TYPE.WITHDRAW
  //     SEND: 3, // custom
  //     RECEIVE: 4 // custom
  //   },
  //   STATUS_TEXT: {
  //     SUCCESS: 'SUCCESS',
  //     FAILED: 'FAILED',
  //     PENDING: 'PENDING',
  //     EXPIRED: 'EXPIRED'
  //   }
  // },
};