import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import appReducer from '../reducer/reducer';

var newsSateStore: Store;

const logger = createLogger({
  collapsed: true
})

export default function configureStore() {
   return createStore(appReducer, applyMiddleware(thunk, logger));
}