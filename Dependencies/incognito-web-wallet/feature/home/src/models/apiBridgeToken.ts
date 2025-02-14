type APIBridgeToken = {
  ID: number,
  CreatedAt: number,
  UpdatedAt: number,
  DeletedAt: number,
  TokenID: string,
  Symbol: string,
  Name: string,
  ContractID: string,
  Decimals: number,
  PDecimals: number,
  Type: number,
  PSymbol: string,
  Default: string,
  UserID: number,
  Verified: number,
  CurrencyType: number,
}

export default APIBridgeToken;
