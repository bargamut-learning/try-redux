'use strict';

/*
In case of use single reducer

function reducer(state, action) {
  switch (action.type) {
    case CREATE_POST:
      const newState = {...state};

      newState.posts = newState.posts.concat(action.payload); // { id: 1, title: `Test post` }

      return newState;

    default: return state;
  }
}

export default reducer;

In case of split your reducer to many parts us combineReducers like below
*/

import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  posts: postsReducer,
  ui: uiReducer,
});
