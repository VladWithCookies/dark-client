import { takeLatest, put } from 'redux-saga/effects'

import { httpClient, dataFormatter } from '../../api'
import * as ACTION_TYPES from './actionTypes'

function* getUsersSaga() {
  const { data } = yield httpClient.get('/users')
  const payload = dataFormatter.deserialize(data)

  yield put({ type: ACTION_TYPES.GET_USERS_SUCCESS, payload })
}

export function* userSaga() {
  yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga)
}
