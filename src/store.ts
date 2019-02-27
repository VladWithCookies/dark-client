import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './concepts/rootReducer';
import rootSaga from './concepts/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export interface IRootState {

};

export default store;
