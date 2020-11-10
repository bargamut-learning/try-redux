'use strict';

import {
  POSTS_FETCH_FAILED,
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_SUCCEEDED,
  CREATE_POST,
  UPDATE_POST,
} from '../actionTypes/postsActionTypes';

export function fetchPosts() {
  return { type: POSTS_FETCH_REQUESTED };
}

export function fetchPostsSucceeded(payload) {
  return {
    type: POSTS_FETCH_SUCCEEDED,
    payload
  };
}

export function fetchPostsFailed(payload) {
  return {
    type: POSTS_FETCH_FAILED,
    payload
  };
}


export function createPost(payload) {
  return {
    type: CREATE_POST,
    payload: {
      ...payload,
      id: Date.now(),
    }
  }
}

export function updatePost(id, payload) {
  return {
    type: UPDATE_POST,
    payload: {
      ...payload,
      id,
    },
  };
}
