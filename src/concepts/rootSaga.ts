import { all } from 'redux-saga/effects'

import { authSaga } from './auth/sagas'
import { chatSaga } from './chat/sagas'
import { userSaga } from './user/sagas'

export default function* rootSaga() {
  yield all([
    authSaga(),
    chatSaga(),
    userSaga(),
  ]);
};
