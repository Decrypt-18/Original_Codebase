import Account from "./account";
import ChainToken from "./chainToken";
import BridgeToken from "./bridgeToken";
import { CONSTANT_COMMONS } from "src/constants";


// function combineData(this: Coin, bridgeData: any, incognitoData: any, defaultData: any) {
//   if (this) {
//     return pData;
//   }

//   if (this.isIncognitoToken) {
//     return incognitoData;
//   }

//   return defaultData;
// }

class Coin {
  id: string | null;
  name: string | null;
  networkName: string | null;
  symbol: string | null;
  externalSymbol?: string | null;
  supplyAmount?: number | null;
  amount: number | null;
  decimals?: number | null;
  pDecimals?: number | null;
  contractId?: string | null;
  currencyType?: number | null;
  displayName: string | null;
  isVerified: boolean;
  private account: Account;
  private chainToken: ChainToken;
  private bridgeToken?: BridgeToken;
  

  constructor(account: Account, chainToken: ChainToken, bridgeToken?: BridgeToken) {
    this.id = null;
    this.name = null;
    this.networkName = null;
    this.symbol = null;
    this.externalSymbol = null;
    this.supplyAmount = null;
    this.amount = null;
    this.decimals = null;
    this.pDecimals = null;
    this.contractId = null;
    this.currencyType = null;
    this.displayName = null;
    this.isVerified = false;
    this.account = account;
    this.chainToken = chainToken;
    this.bridgeToken = bridgeToken;

    this.combineData();
  }

  /**
   * such as BTC, ETH, BNB,...
   */
  isPrivacyCoinType(): boolean {
    return this.bridgeToken?.type === CONSTANT_COMMONS.PRIVATE_TOKEN_TYPE.COIN;
  }

  /**
   * such as ERC20 tokens, BEP2 tokens,...
   */
  isPrivacyTokenType(): boolean {
    return this.bridgeToken?.type === CONSTANT_COMMONS.PRIVATE_TOKEN_TYPE.TOKEN;
  }

  /**
   * It's PRV for now
   */
  isNativeToken(): boolean {
    return this.id === CONSTANT_COMMONS.COMMON_TOKENS.PRV.id;
  }

  /**
   * Coins/tokens from other chains (Bitcoin, Ethereum,...)
   */
  isBridgeCoin(): boolean {
    return !!this.bridgeToken?.pSymbol;
  }

  /**
   * Coins were issued in Incognito chain
   */
  isChainCoin(): boolean {
    return !this.isBridgeCoin();
  }

  isERC20(): boolean {
    return this.isPrivacyTokenType() && this.currencyType === CONSTANT_COMMONS.PRIVATE_TOKEN_CURRENCY_TYPE.ERC20;
  }

  isBep2(): boolean {
    return this.isPrivacyTokenType() && this.currencyType === CONSTANT_COMMONS.PRIVATE_TOKEN_CURRENCY_TYPE.BNB_BEP2;
  }

  private getData(bridgeData: any, chainData: any, nativeData: any) {
    if (this.isNativeToken()) return nativeData;
    if (this.isBridgeCoin()) return this.bridgeToken;
    if (this.isChainCoin()) return chainData;
  }

  private getNetworkName() {
    let name = 'Unknown';
    if (this.isPrivacyCoinType()) {
      name = `${this.name}`;
    } else if (this.isERC20()) {
      name = 'ERC20';
    } else if (this.isBep2()) {
      name = 'BEP2';
    } else if (this.isNativeToken() || this.isChainCoin()) {
      name = 'Incognito';
    }

    return name;
  }

  private combineData() {
    const { COMMON_TOKENS } = CONSTANT_COMMONS;
    this.id = this.bridgeToken?.id || this.chainToken.id;
    this.currencyType = this.bridgeToken?.currencyType;
    this.name = this.getData(this.bridgeToken?.name, this.chainToken.name, COMMON_TOKENS.PRV.name);
    this.symbol = this.getData(this.bridgeToken?.pSymbol, this.chainToken.symbol, COMMON_TOKENS.PRV.symbol);
    this.externalSymbol = this.bridgeToken?.symbol;
    this.displayName = this.getData(`Privacy ${this.bridgeToken?.symbol}`, this.chainToken.name, COMMON_TOKENS.PRV.name);
    this.isVerified = this.getData(this.bridgeToken?.verified, false, true);
    this.amount = this.isNativeToken() ? this.account.amount : this.chainToken.amount;
    this.contractId = this.bridgeToken?.contractId;
    this.decimals = this.isNativeToken() ? COMMON_TOKENS.PRV.decimals : this.bridgeToken?.decimals;
    this.pDecimals = this.isNativeToken() ? COMMON_TOKENS.PRV.pDecimals : this.bridgeToken?.pDecimals;
    this.networkName = this.getNetworkName()
  }
}

export default Coin;

// let a = new Coin();

