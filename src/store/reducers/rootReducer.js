'use strict';

import { CREATE_POST } from '../actionTypes/posts';

function reducer(state, action) {
  switch (action.type) {
    case CREATE_POST: return { value: action.payload };
    default: return state;
  }
}

export default reducer;
