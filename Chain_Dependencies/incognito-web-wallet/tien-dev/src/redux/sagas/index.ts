import { takeEvery } from 'redux-saga/effects';
import {
  CREATE_WALLET,
  LOAD_WALLET,
} from 'src/redux/actionTypes';
import { createWalletEffect, loadWalletEffect } from './wallet';

export default function* rootSaga() {
  yield takeEvery(LOAD_WALLET, loadWalletEffect);
  yield takeEvery(CREATE_WALLET, createWalletEffect);
}
