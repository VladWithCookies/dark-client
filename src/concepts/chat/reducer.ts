import { Reducer } from 'redux'
import { some } from 'lodash'

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
      const firstChatId = action.payload[0] && action.payload[0].id

      return {
        chats: action.payload,
        selectedChatId: state.selectedChatId || firstChatId
      }
    case ACTION_TYPES.RECEIVE_CHAT_SUCCESS:
      const chat = dataFormatter.deserialize(action.payload) as IChat
      const isExistingChat = some(state.chats, { id: chat.id })

      return {
        ...state,
        selectedChatId: chat.id,
        chats: isExistingChat ? state.chats : [...state.chats, chat]
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
