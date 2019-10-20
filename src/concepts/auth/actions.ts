import { action } from 'typesafe-actions'

import * as ACTION_TYPES from './actionTypes'
import { ICredentials } from './types'

export const login = (credentials: ICredentials) =>
  action(ACTION_TYPES.LOGIN, credentials)

export const logout = () =>
  action(ACTION_TYPES.LOGOUT)
