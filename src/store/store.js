'use strict';

// Global store of the app

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import initialState from './initialState';
import reducer from './reducers/rootReducer';
import mySagaPost from './sagas/postsSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const isHaveReduxDevTools =
  process.env.NODE_ENV !== `production` &&
  composeEnhancers;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    isHaveReduxDevTools ? composeEnhancers() : (a) => a,
  )
);

sagaMiddleware.run(mySagaPost);

/*
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(`Subscribe:`, store.getState()));

// Will notify by console.log below and by subscribe
store.dispatch(
  createPost(
    { id: 1, title: `Test post creation` }
  )
);

console.log(store.getState());

unsubscribe();

// Will notify only by consloe.log below
store.dispatch(
  createPost(
    { id: 2, title: `Test post creation 2` }
  )
);

console.log(store.getState());
*/

export default store;
