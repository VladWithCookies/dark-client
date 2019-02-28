import axios from 'axios';
import Cookies from 'js-cookie';
import { ActionType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects'

import AuthApi from '../../api/AuthApi';
import { ICredentials } from './types';
import * as ACTION_TYPES from './actionTypes';
import * as actions from './actions';

export function* loginSaga(action: ActionType<typeof actions>) {
  const response = yield call(AuthApi.login, action.payload);

  yield Cookies.set('token',  response.data.jwt);
};

export function* authSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN, loginSaga);
};
