import { Reducer } from 'redux'

import * as ACTION_TYPES from './actionTypes'
import { IModal } from './types'

export interface IModalsState {
  modals: IModal[]
}

const initialState: IModalsState = {
  modals: []
}

const modalsReducer: Reducer<IModalsState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_MODAL:
      return {
        ...state,
        modals: [
          ...state.modals,
          action.payload,
        ]
      }
    case ACTION_TYPES.HIDE_MODAL:
      return {
        ...state,
        modals: state.modals.filter(({ id }) => id !== action.payload.id)
      }
    default:
      return state
  }
}

export default modalsReducer
