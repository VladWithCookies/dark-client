import { Reducer } from 'redux'
import { merge } from 'lodash'

import { dataFormatter } from '../../api'
import * as ACTION_TYPES from './actionTypes'
import { IChat } from './types'

export interface IChatState {
  chats: IChat[],
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
    case ACTION_TYPES.RECEIVE_MESSAGE_SUCCESS:
      const message = dataFormatter.deserialize(action.payload)
      // FIXME
      return merge({}, state, {
        chats: [
          {
            messages: [...state.chats[0].messages, message]
          }
        ]
      })
    default:
      return state;
  }
}

export default chatReducer
