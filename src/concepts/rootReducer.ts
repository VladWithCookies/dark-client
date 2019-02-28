import { combineReducers } from 'redux';

import auth, { IAuthState } from './auth/reducer';

export interface IRootState {
  auth: IAuthState
};

export default combineReducers({
  auth
});
