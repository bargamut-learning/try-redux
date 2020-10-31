'use strict';

import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from './App';

const mock = {
  text: `Test data`,
};

it('should render App correctly without data', () => {
  const app = renderer
    .create(<App />)
    .toJSON();

  expect(app).toMatchSnapshot();
});

it('should render App correctly with mock title', () => {
  const { text: title } = mock;

  const app = renderer
    .create(<App text={title} />)
    .toJSON();

  expect(app).toMatchSnapshot();
});
