import { action } from 'typesafe-actions'

import { IModal } from './types'
import * as ACTION_TYPES from './actionTypes'

export const showModal = (modal: IModal) => action(ACTION_TYPES.SHOW_MODAL, modal)
export const hideModal = (modal: IModal) => action(ACTION_TYPES.HIDE_MODAL, modal)
