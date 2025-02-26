import { call, put, select } from "redux-saga/effects";
import { getAllAccounts } from "src/services/account";
import { RootState } from "../reducers";

export const ACTION_FETCH_ACCOUNTS = `[accounts] Fetch accounts`;
export const ACTION_FETCHED_ACCOUNTS = `[accounts] Fetched accounts`;
export const ACTION_FETCH_FAIL_ACCOUNTS = `[accounts] Fetch fail accounts`;

export function* actionFetchAccounts() {
  try {
    const { walletReducer } = yield select();
    const data = yield call(getAllAccounts, walletReducer.wallet);
    yield put({
      type: ACTION_FETCHED_ACCOUNTS,
      payload: data
    });
  } catch (error) {
    yield put({
      type: ACTION_FETCH_FAIL_ACCOUNTS
    });
  }
}
