import TokenReceiver from './tokenReceiver';

type SubmitParams = {
  Privacy: boolean,
  TokenID: string,
  TokenName: string,
  TokenSymbol: string,
  TokenTxType: boolean,
  TokenAmount: number,
  TokenReceivers : TokenReceiver[],
}

export default SubmitParams;
