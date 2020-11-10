'use strict';

import { CREATE_POST, POSTS_FETCH_SUCCEEDED, UPDATE_POST } from '../actionTypes/postsActionTypes';

function postsReducer(state = [], action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCEEDED: return state.concat(action.payload);

    case CREATE_POST: return state.concat(action.payload); // { id: 1, title: `Test post` };

    case UPDATE_POST:
      return state.map(post => {
        return (post.id === action.payload.id)
          ? { ...post, ...action.payload }
          : post;
      });

    default: return state;
  }
}

export default postsReducer;
