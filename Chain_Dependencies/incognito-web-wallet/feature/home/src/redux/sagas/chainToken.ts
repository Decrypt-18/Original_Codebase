import { put, call } from 'redux-saga/effects'
import {
  GET_CHAIN_TOKENS_FAILED,
  GET_CHAIN_TOKENS_SUCCESS,
} from 'src/redux/actionTypes';
import { getChainTokenList } from 'src/services/api/token';
import ChainToken from 'src/models/chainToken';



export function* getChainTokenListEffect() {
  try {
    const tokens : ChainToken[] = yield call(getChainTokenList);
    if (tokens) {
      yield put({ type: GET_CHAIN_TOKENS_SUCCESS, payload: tokens });
    }
  } catch (e) {
    yield put({ type: GET_CHAIN_TOKENS_FAILED, error: e.message });
  }
}