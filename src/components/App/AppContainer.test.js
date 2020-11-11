'use strict';

import * as React from 'react';
import { render, screen, fireEvent } from '../../utils/testUtils';

import App from './AppContainer';

const mock = {
  text: `Test data`,
};

it('should render App correctly without data', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});

it('should render App correctly with mock title', () => {
  const { text: title } = mock;

  const { container } = render(<App text={title} />, {
    initialState: {
      posts: [
        { id: 1, title: `Test post` },
      ]
    }
  });

  expect(container).toMatchSnapshot();
});
