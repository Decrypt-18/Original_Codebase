import ReduxAction from 'src/models/action';
import {
  GET_BRIDGE_TOKENS,
  GET_BRIDGE_TOKENS_SUCCESS,
  GET_BRIDGE_TOKENS_FAILED,
} from 'src/redux/actionTypes'
import BridgeToken from 'src/models/bridgeToken';

export type BridgeTokenState = {
  getting: boolean,
  data: BridgeToken[],
  error?: string | null,
}

const initialState: BridgeTokenState = {
  getting: false,
  data: [],
  error: null,
};

const actions: any = {};

actions[GET_BRIDGE_TOKENS] = (state: BridgeTokenState) => ({
  ...state,
  getting: true,
  error: null,
});

actions[GET_BRIDGE_TOKENS_SUCCESS] = (state: BridgeTokenState, action: ReduxAction) => ({
  ...state,
  getting: false,
  data: action.payload,
});

actions[GET_BRIDGE_TOKENS_FAILED] = (state: BridgeTokenState, action: ReduxAction) => ({
  ...state,
  getting: false,
  error: action.error
});

export default function (state = initialState, action: any) {
  const fn = actions[action.type];

  return fn ? fn(state, action) : state;
}
