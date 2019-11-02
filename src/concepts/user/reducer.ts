import { Reducer } from 'redux'

import * as ACTION_TYPES from './actionTypes'
import { IUser } from './types'

export interface IUserState {
  users: IUser[],
}

const initialState: IUserState = {
  users: [],
}

const userReducer: Reducer<IUserState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USERS_SUCCESS:
      return {
        users: action.payload,
      }
    default:
      return state;
  }
}

export default userReducer
