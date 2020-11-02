'use strict';

// Global store of the app

import { createStore } from 'redux';
import initialState from './initialState';
import reducer from './reducers/rootReducer';

const isHaveReduxDevTools =
  process.env.NODE_ENV !== `production` &&
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  initialState,
  isHaveReduxDevTools
);

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
