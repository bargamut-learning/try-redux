'use strict';

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';

const mock = {
  text: `Test data`,
};

it('should render App correctly without data', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<App />);

  const app = renderer.getRenderOutput();

  expect(app).toMatchSnapshot();
});

it('should render App correctly with mock title', () => {
  const { text: title } = mock;

  const renderer = new ShallowRenderer();

  renderer.render(<App text={title} />);

  const app = renderer.getRenderOutput();

  expect(app).toMatchSnapshot();
});
