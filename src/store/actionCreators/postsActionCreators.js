'use strict';

import { CREATE_POST, UPDATE_POST } from '../actionTypes/postsActionTypes';

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
