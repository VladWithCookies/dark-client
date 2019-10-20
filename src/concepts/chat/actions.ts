import { action } from 'typesafe-actions'

import * as ACTION_TYPES from './actionTypes'

export const getChats = () => action(ACTION_TYPES.GET_CHATS_REQUEST)
export const receiveChat = (chat: unknown) => action(ACTION_TYPES.RECEIVE_CHAT_SUCCESS, chat)
