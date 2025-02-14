import BridgeToken from 'src/models/bridgeToken';
import ChainToken from 'src/models/chainToken';
import api from 'src/services/api';
import APIBridgeToken from 'src/models/apiBridgeToken';
import APIChainToken from 'src/models/apiChainToken';

let getTokenPromise: Promise<BridgeToken[]> | null;
let getChainTokenPromise: Promise<ChainToken[]> | null;

type ChainTokenResponse = {
  Tokens: APIChainToken[],
}

export const getBridgeTokenList = () => {
  if (!getTokenPromise) {
    getTokenPromise = api.get<APIBridgeToken[]>('ptoken/list')
      .then(res => {
        getTokenPromise = null;
        return res.data.map((token: APIBridgeToken) => new BridgeToken(token));
      })
      .finally(() => {
        getTokenPromise = null;
      });
  }

  return getTokenPromise;
};

export const getChainTokenList = () => {
  if (!getChainTokenPromise) {
    getChainTokenPromise = api.get<ChainTokenResponse>('/pcustomtoken/list-from-chain')
      .then(res => {
        return res.data.Tokens?.map((token: APIChainToken) => new ChainToken(token));
      })
      .finally(() => {
        getChainTokenPromise = null;
      });
  }

  return getChainTokenPromise;
};
