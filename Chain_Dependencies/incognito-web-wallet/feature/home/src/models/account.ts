import WebJSAccount from './webJSAccount';

class Account {
  name: string;
  amount: number;
  paymentAddress: string;
  readonlyKey: string;
  privateKey: string;
  publicKey: string;
  publicKeyCheckEncode: string;
  publicKeyBytes: string;
  blsPublicKey: string;
  validatorKey: string;

  constructor(data: WebJSAccount) {
    this.name = data?.AccountName;
    this.paymentAddress = data?.PaymentAddress;
    this.readonlyKey = data?.ReadonlyKey;
    this.privateKey = data?.PrivateKey;
    this.publicKey = data?.PublicKey;
    this.publicKeyCheckEncode = data?.PublicKeyCheckEncode;
    this.publicKeyBytes = data?.PublicKeyBytes;
    this.blsPublicKey = data?.BLSPublicKey;
    this.validatorKey = data?.ValidatorKey;
    this.amount = 0;
  }
}

export default Account;
