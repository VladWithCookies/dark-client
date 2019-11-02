import { action } from 'typesafe-actions'

import * as ACTION_TYPES from './actionTypes'

export const getUsers = () => action(ACTION_TYPES.GET_USERS_REQUEST)
