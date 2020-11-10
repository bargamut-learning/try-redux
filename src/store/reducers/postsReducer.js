'use strict';

import { CREATE_POST, UPDATE_POST } from '../actionTypes/postsActionTypes';

function postsReducer(state = [], action) {
  switch (action.type) {
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
