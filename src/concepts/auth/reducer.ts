import { Reducer } from 'redux';

import * as ACTION_TYPES from './constants';

export interface IAuthState {

};

const initialState: IAuthState = {

};

const authReducer: Reducer<IAuthState> = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return state;
    default:
      return state;
  }
};

export default authReducer;
