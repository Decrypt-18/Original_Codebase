import ReduxAction from 'src/models/action';
import {
  GET_CHAIN_TOKENS,
  GET_CHAIN_TOKENS_SUCCESS,
  GET_CHAIN_TOKENS_FAILED,
} from 'src/redux/actionTypes'
import ChainToken from 'src/models/chainToken';

export type ChainTokenState = {
  getting: boolean,
  data: ChainToken[],
  error?: string | null,
}

const initialState: ChainTokenState = {
  getting: false,
  data: [],
  error: null,
};

const actions: any = {};

actions[GET_CHAIN_TOKENS] = (state: ChainTokenState) => ({
  ...state,
  getting: true,
  error: null,
});

actions[GET_CHAIN_TOKENS_SUCCESS] = (state: ChainTokenState, action: ReduxAction) => ({
  ...state,
  getting: false,
  data: action.payload,
});

actions[GET_CHAIN_TOKENS_FAILED] = (state: ChainTokenState, action: ReduxAction) => ({
  ...state,
  getting: false,
  error: action.error
});

export default function (state = initialState, action: any) {
  const fn = actions[action.type];

  return fn ? fn(state, action) : state;
}
