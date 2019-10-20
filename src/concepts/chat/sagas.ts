import { takeLatest, put } from 'redux-saga/effects'

import { httpClient, dataFormatter } from '../../api'
import * as ACTION_TYPES from './actionTypes'

function* getChatsSaga() {
  const { data } = yield httpClient.get('/chats')
  const payload = dataFormatter.deserialize(data)

  yield put({ type: ACTION_TYPES.GET_CHATS_SUCCESS, payload })
}

export function* chatSaga() {
  yield takeLatest(ACTION_TYPES.GET_CHATS_REQUEST, getChatsSaga)
}
