'use strict';

// See this: https://hackernoon.com/handling-loading-actions-the-proper-way-in-redux-t3k36e8

import * as uiActionTypes from '../actionTypes/uiActionTypes';

import initiaState from '../initialState';

function uiReducer(state = initiaState.ui, { type, payload }) {
  const { loader } = state;
  const { actions, refreshing } = loader;

  switch (type) {
    case uiActionTypes.START_ACTION:
      return {
        loader: {
          ...loader,
          actions: [ ...actions, payload.action ]
        }
      };

    case uiActionTypes.STOP_ACTION:
      return {
        loader: {
          ...loader,
          actions: actions.filter((action) => action.name !== payload.name)
        }
      };

    case uiActionTypes.REFRESH_START_ACTION:
      return {
        loader: {
          ...loader,
          refreshing: [ ...refreshing, payload.refreshAction ]
        }
      };

    case uiActionTypes.REFRESH_STOP_ACTION:
      return {
        loader: {
          ...loader,
          refreshing: refreshing.filter((refresh) => refresh !== payload.refreshAction)
        }
      };

    default: return state;
  }
}

export default uiReducer;
