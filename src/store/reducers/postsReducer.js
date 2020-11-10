'use strict';

import * as postsActionTypes from '../actionTypes/postsActionTypes';

import initialState from '../initialState';

function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case postsActionTypes.POSTS_FETCH_SUCCEEDED: return state.concat(action.payload);

    case postsActionTypes.CREATE_POST: return state.concat(action.payload); // { id: 1, title: `Test post` };

    case postsActionTypes.UPDATE_POST:
      return state.map(post => {
        return (post.id === action.payload.id)
          ? { ...post, ...action.payload }
          : post;
      });

    default: return state;
  }
}

export default postsReducer;
