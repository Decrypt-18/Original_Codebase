import APIChainToken from './apiChainToken';

class ChainToken {
  id: string;
  name: string;
  symbol: string;

  constructor(data: APIChainToken) {
    this.id = data.TokenID;
    this.name = data.TokenName;
    this.symbol = data.TokenSymbol;
  }
}

export default ChainToken;
