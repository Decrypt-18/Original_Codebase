import APIPToken from './apiPToken';

class PToken {
  id: number;
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
  tokenId: string;
  symbol: string;
  name: string;
  contractId: string;
  decimals: number;
  pDecimals: number;
  type: number;
  pSymbol: string;
  default: string;
  userId: number;
  verified: number;
  currencyType: number;

  constructor(data: APIPToken) {
    this.id = data.ID;
    this.createdAt = data.CreatedAt;
    this.updatedAt = data.UpdatedAt;
    this.deletedAt = data.DeletedAt;
    this.tokenId = data.TokenID;
    this.symbol = data.Symbol;
    this.name = data.Name;
    this.contractId = data.ContractID;
    this.decimals = data.Decimals;
    this.pDecimals = data.PDecimals;
    this.type = data.Type; // coin or token
    this.pSymbol = data.PSymbol;
    this.default = data.Default;
    this.userId = data.UserID;
    this.verified = data.Verified;
    this.currencyType = data.CurrencyType; // including ERC20, BEP1, BEP2,...
  }
}

export default PToken;
