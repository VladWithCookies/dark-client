import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth, { IAuthState } from './auth/reducer'
import chat, { IChatState } from './chat/reducer'
import modal, { IModalsState } from './modal/reducer'
import user, { IUserState } from './user/reducer'

export interface IRootState {
  auth: IAuthState,
  chat: IChatState,
  modal: IModalsState,
  user: IUserState,
};

export default (history: any) => combineReducers({
  router: connectRouter(history),
  auth,
  chat,
  modal,
  user,
});
