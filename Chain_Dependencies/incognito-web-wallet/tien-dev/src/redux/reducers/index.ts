import { combineReducers } from 'redux';
import pTokenReducer, { PTokenState } from './pToken';
import walletReducer, { WalletState } from './wallet';

export interface RootState {
  pTokenReducer: PTokenState,
  walletReducer: WalletState,
}

const rootReducer = combineReducers({
  pTokenReducer,
  walletReducer,
});

export default rootReducer;
