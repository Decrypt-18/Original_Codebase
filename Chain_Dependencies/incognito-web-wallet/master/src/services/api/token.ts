import PToken from 'src/models/pToken';
import ChainToken from 'src/models/chainToken';
import api from 'src/services/api';
import APIPToken from 'src/models/apiPToken';

let getTokenPromise: Promise<PToken[]> | null;
let getChainTokenPromise: Promise<ChainToken[]> | null;

type ChainTokenResponse = {
  Tokens: ChainToken[],
}

export const getTokenList = () => {
  if (!getTokenPromise) {
    getTokenPromise = api.get<APIPToken[]>('ptoken/list')
      .then(res => {
        getTokenPromise = null;
        return res.data.map((token: APIPToken) => new PToken(token));
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
        return res.data.Tokens;
      })
      .finally(() => {
        getChainTokenPromise = null;
      });
  }

  return getChainTokenPromise;
};
