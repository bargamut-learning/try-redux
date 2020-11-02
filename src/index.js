'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import kitty from './img/kitty.jpg';
import './styles/main.css';

import AppContainer from './components/App/AppContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer text={`Bargamut's Trying Redux`} image={kitty} />
    </Provider>
  </React.StrictMode>,
  document.getElementById(`root`)
);
