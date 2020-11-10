'use strict';

import * as uiActionTypes from '../actionTypes/uiActionTypes';

export const startAction = (name, params) => ({
  type: uiActionTypes.START_ACTION,
  payload: {
    action: {
      name,
      params,
    }
  }
});

export const stopAction = (name) => ({
  type: uiActionTypes.STOP_ACTION,
  payload: { name }
});

export const startRefreshAction = (refreshAction) => ({
  type: uiActionTypes.REFRESH_START_ACTION,
  payload: { refreshAction }
});

export const stopRefreshAction = (refreshAction) => ({
  type: uiActionTypes.REFRESH_STOP_ACTION,
  payload: { refreshAction }
});
