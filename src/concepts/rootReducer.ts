import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth, { IAuthState } from './auth/reducer';
import chat, { IChatState } from './chat/reducer';

export interface IRootState {
  auth: IAuthState,
  chat: IChatState,
};

export default (history: any) => combineReducers({
  router: connectRouter(history),
  auth,
  chat,
});
