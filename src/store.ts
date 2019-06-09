import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history'
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";

import rootReducer from './concepts/rootReducer';
import rootSaga from './concepts/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [routerMiddleware, sagaMiddleware];

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export default store;
