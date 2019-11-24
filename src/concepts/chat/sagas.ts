import { takeLatest, put, select } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import { httpClient, dataFormatter } from '../../api'
import * as ACTION_TYPES from './actionTypes'
import * as actions from './actions'

function* getChatsSaga() {
  const { data } = yield httpClient.get('/chats')
  const payload = dataFormatter.deserialize(data)

  yield put({ type: ACTION_TYPES.GET_CHATS_SUCCESS, payload })
}

function* createChatSaga(action: ActionType<typeof actions.createChat>) {
  yield httpClient.post('/chats', { user_ids: action.payload })
}

function* createMessageSaga(action: ActionType<typeof actions.createMessage>) {
  const chatId = yield select((state) => state.chat.selectedChatId)

  yield httpClient.post(`/chats/${chatId}/messages`, { text: action.payload })
}

export function* chatSaga() {
  yield takeLatest(ACTION_TYPES.GET_CHATS_REQUEST, getChatsSaga)
  yield takeLatest(ACTION_TYPES.CREATE_CHAT_REQUEST, createChatSaga)
  yield takeLatest(ACTION_TYPES.CREATE_MESSAGE_REQUEST, createMessageSaga)
}
