import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  // compose (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk))
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
