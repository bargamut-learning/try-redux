'use strict';

import { CREATE_POST } from '../actionTypes/posts';

function postsReducer(state = [], action) {
  switch (action.type) {
    case CREATE_POST: return state.concat(action.payload); // { id: 1, title: `Test post` };

    // case UPDATE_POST: return ...

    default: return state;
  }
}

export default postsReducer;
