import ReduxAction from 'src/models/action';
import {
  GET_BRIDGE_TOKENS,
  GET_BRIDGE_TOKENS_SUCCESS,
  GET_BRIDGE_TOKENS_FAILED,
} from 'src/redux/actionTypes';
import PToken from 'src/models/pToken';

export type PTokenState = {
  getting: boolean,
  data: PToken[],
  error?: string | null,
}

const initialState: PTokenState = {
  getting: false,
  data: [],
  error: null,
};

const actions: any = {};

actions[GET_BRIDGE_TOKENS] = (state: PTokenState) => ({
  ...state,
  getting: true,
  error: null,
});

actions[GET_BRIDGE_TOKENS_SUCCESS] = (state: PTokenState, action: ReduxAction) => ({
  ...state,
  getting: false,
  data: action.payload,
});

actions[GET_BRIDGE_TOKENS_FAILED] = (state: PTokenState, action: ReduxAction) => ({
  ...state,
  getting: false,
  error: action.error,
});

export default function (state = initialState, action: any) {
  const fn = actions[action.type];

  return fn ? fn(state, action) : state;
}
