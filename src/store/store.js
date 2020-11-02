'use strict';

// Global store of the app

import initialState from './initialState';
import { createStore } from 'redux';

const store = createStore(reducer, initialState);

export default store;
