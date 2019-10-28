import { takeLatest, put } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { httpClient, dataFormatter } from '../../api'
import * as ACTION_TYPES from './actionTypes'
import * as actions from './actions'

function* getChatsSaga() {
  const { data } = yield httpClient.get('/chats')
  const payload = dataFormatter.deserialize(data)

  yield put({ type: ACTION_TYPES.GET_CHATS_SUCCESS, payload })
}

function* createMessageSaga(action: ActionType<typeof actions.createMessage>) {
  yield httpClient.post('/chats/17/messages', { text: action.payload }) // FIXME
}

export function* chatSaga() {
  yield takeLatest(ACTION_TYPES.GET_CHATS_REQUEST, getChatsSaga)
  yield takeLatest(ACTION_TYPES.CREATE_MESSAGE_REQUEST, createMessageSaga)
}
