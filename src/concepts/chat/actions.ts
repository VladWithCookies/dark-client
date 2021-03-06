import { action } from 'typesafe-actions'

import * as ACTION_TYPES from './actionTypes'

export const getChats = () => action(ACTION_TYPES.GET_CHATS_REQUEST)
export const receiveChat = (chat: string) => action(ACTION_TYPES.RECEIVE_CHAT_SUCCESS, chat)

export const createMessage = (text: string) => action(ACTION_TYPES.CREATE_MESSAGE_REQUEST, text)
export const receiveMessage = (message: string) => action(ACTION_TYPES.RECEIVE_MESSAGE_SUCCESS, message)

export const createChat = (userIds: string[]) => action(ACTION_TYPES.CREATE_CHAT_REQUEST, userIds)

export const selectChat = (id: string) => action(ACTION_TYPES.SELECT_CHAT, id)
