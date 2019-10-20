import { Reducer } from 'redux'

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
    default:
      return state;
  }
}

export default chatReducer
