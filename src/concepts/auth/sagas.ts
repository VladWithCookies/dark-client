import axios from 'axios';
import { takeLatest, call } from 'redux-saga/effects'

import AuthApi from '../../api/AuthApi';
import * as ACTION_TYPES from './constants';

export function* loginSaga() {
  const token = yield call(AuthApi.login);
  console.log(token);
};

export function* authSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN, loginSaga);
};
