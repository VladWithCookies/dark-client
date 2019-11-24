import { Reducer } from 'redux'

import { dataFormatter } from '../../api'
import * as ACTION_TYPES from './actionTypes'
import { IChat } from './types'

export interface IChatState {
  chats: IChat[],
  selectedChatId?: string
}

const initialState: IChatState = {
  chats: [],
}

const chatReducer: Reducer<IChatState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CHATS_SUCCESS:
      return {
        chats: action.payload,
      }
    case ACTION_TYPES.RECEIVE_CHAT_SUCCESS:
      const chat = dataFormatter.deserialize(action.payload)

      return {
        chats: [...state.chats, chat]
      }
    case ACTION_TYPES.SELECT_CHAT:
      return {
        ...state,
        selectedChatId: action.payload,
      }
    case ACTION_TYPES.RECEIVE_MESSAGE_SUCCESS:
      const message: any = dataFormatter.deserialize(action.payload)
      const { id } = message.chat
      const { chats } = state
      const targetChat = chats.find(item => item.id === id)
      const messages = targetChat ? targetChat.messages : []

      if (targetChat) {
        const index = chats.indexOf(targetChat)

        return {
          ...state,
          chats: [
            ...chats.slice(0, index),
            {
              ...targetChat,
              messages: [...messages, message],
            },
            ...chats.slice(index + 1, chats.length)
          ]
        }
      }

      return state
    default:
      return state
  }
}

export default chatReducer
