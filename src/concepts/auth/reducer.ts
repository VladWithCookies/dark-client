import { Reducer } from 'redux'
import Cookies from 'js-cookie'

import * as ACTION_TYPES from './actionTypes'

export interface IAuthState {
  isLoggedIn: boolean
}

const token = Cookies.get('token')

const initialState: IAuthState = {
  isLoggedIn: !!token
}

const authReducer: Reducer<IAuthState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}

export default authReducer
