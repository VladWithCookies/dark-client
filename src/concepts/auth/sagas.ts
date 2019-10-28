import Cookies from 'js-cookie'
import { ActionType } from 'typesafe-actions'
import { takeLatest, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import httpClient from '../../api/httpClient'
import * as ACTION_TYPES from './actionTypes'
import * as actions from './actions'

function* loginSaga(action: ActionType<typeof actions.login>) {
  const { data } = yield httpClient.post('/user_token', { auth: action.payload })

  yield Cookies.set('token', data.jwt)
}

function* logoutSaga() {
  yield Cookies.remove('token')
  yield put(push('/login'))
}

export function* authSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN, loginSaga)
  yield takeLatest(ACTION_TYPES.LOGOUT, logoutSaga)
}
