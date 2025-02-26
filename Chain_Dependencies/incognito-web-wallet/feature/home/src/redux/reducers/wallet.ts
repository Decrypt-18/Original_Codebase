import ReduxAction from 'src/models/action';
import {
  LOAD_WALLET,
  LOAD_WALLET_SUCCESS,
  LOAD_WALLET_FAILED,
  CREATE_WALLET,
  CREATE_WALLET_SUCCESS,
  CREATE_WALLET_FAILED,
} from 'src/redux/actionTypes'

export type WalletState = {
  loading: boolean,
  creating: boolean,
  wallet: any,
  error?: string | null,
}

const initialState: WalletState = {
  loading: false,
  creating: false,
  wallet: null,
  error: null,
};

const actions: any = {};

actions[LOAD_WALLET] = (state: WalletState) => ({
  ...state,
  loading: true,
  error: null,
});

actions[LOAD_WALLET_SUCCESS] = (state: WalletState, action: ReduxAction) => ({
  ...state,
  loading: false,
  wallet: action.payload,
});

actions[LOAD_WALLET_FAILED] = (state: WalletState, action: ReduxAction) => ({
  ...state,
  loading: false,
  error: action.error
});

actions[CREATE_WALLET] = (state: WalletState) => ({
  ...state,
  loading: false,
  creating: true,
  error: null,
});

actions[CREATE_WALLET_SUCCESS] = (state: WalletState, action: ReduxAction) => ({
  ...state,
  creating: false,
  wallet: action.payload,
});

actions[CREATE_WALLET_FAILED] = (state: WalletState, action: ReduxAction) => ({
  ...state,
  creating: false,
  error: action.error
});

export default function (state = initialState, action: any) {
  const fn = actions[action.type];

  return fn ? fn(state, action) : state;
}
