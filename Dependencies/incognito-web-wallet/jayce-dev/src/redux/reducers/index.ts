import { combineReducers } from "redux";
import pTokenReducer, { PTokenState } from "./pToken";
import walletReducer, { WalletState } from "./wallet";
import accountsReducer, { IAccState } from "./accounts";

export interface RootState {
  pTokenReducer: PTokenState;
  walletReducer: WalletState;
  accountsReducer: IAccState;
}

const rootReducer = combineReducers({
  pTokenReducer,
  walletReducer,
  accountsReducer
});

export default rootReducer;
