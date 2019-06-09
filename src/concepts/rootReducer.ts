import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth, { IAuthState } from './auth/reducer';

export interface IRootState {
  auth: IAuthState
};

export default (history: any) => combineReducers({
  router: connectRouter(history),
  auth
});
