import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from './logger';
import reducers from '../reducers';

function configureStore(initialState) {
  const middleware = [thunk];

  if (__DEV__) {
    middleware.push(createLogger());
  }

  return createStore(reducers, initialState, applyMiddleware(...middleware));
}

export default configureStore;
