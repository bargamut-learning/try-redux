'use strict';

import { CREATE_POST } from '../actionTypes/posts';

function createPost(payload) {
  return {
    type: CREATE_POST,
    payload: {
      ...payload,
      id: Date.now(),
    }
  }
}

export default createPost;
