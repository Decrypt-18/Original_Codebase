import { combineReducers } from 'redux';
import bridgeTokenReducer, { BridgeTokenState } from './bridgeToken';
import chainTokenReducer, { ChainTokenState } from './chainToken';
import walletReducer, { WalletState } from './wallet';

export interface RootState {
  bridgeTokenReducer: BridgeTokenState,
  walletReducer: WalletState,
  chainTokenReducer: ChainTokenState,
}

const rootReducer = combineReducers({
  bridgeTokenReducer,
  walletReducer,
  chainTokenReducer,
});

export default rootReducer;
