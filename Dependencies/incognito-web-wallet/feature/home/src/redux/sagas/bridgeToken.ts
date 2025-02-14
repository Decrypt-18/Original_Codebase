import { put, call } from 'redux-saga/effects'
import {
  GET_BRIDGE_TOKENS_FAILED,
  GET_BRIDGE_TOKENS_SUCCESS,
} from 'src/redux/actionTypes';
import { getBridgeTokenList } from 'src/services/api/token';
import BridgeToken from 'src/models/bridgeToken';



export function* getBridgeTokenListEffect() {
  try {
    const tokens : BridgeToken[] = yield call(getBridgeTokenList);
    if (tokens) {
      yield put({ type: GET_BRIDGE_TOKENS_SUCCESS, payload: tokens });
    }
  } catch (e) {
    yield put({ type: GET_BRIDGE_TOKENS_FAILED, error: e.message });
  }
}