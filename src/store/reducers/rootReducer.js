'use strict';

function reducer(state, action) {
  switch (action.type) {
    case CREATE_POST:
      const newState = {...state};

      newState.posts.concat(action.payload); // { id: 1, title: `Test post` }

      return newState;

    default: return state;
  }
}

export default reducer;
