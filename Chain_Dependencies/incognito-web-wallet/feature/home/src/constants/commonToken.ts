export interface CommonTokenInfo {
  id: string,
  decimals?: number,
  pDecimals?: number,
  symbol?: string,
  name?: string
};

interface CommonToken {
  PRV: CommonTokenInfo
}

const commonToken: CommonToken = {
  PRV: {
    id: '0000000000000000000000000000000000000000000000000000000000000004',
    decimals: 9,
    pDecimals: 9,
    symbol: 'PRV',
    name: 'Privacy'
  }
};


export default commonToken;