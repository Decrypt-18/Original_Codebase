import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];

const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
