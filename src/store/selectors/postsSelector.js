'use strict';

import { createSelector } from 'reselect';

export const getPosts = (state) => state.posts;

export const getPostsTotal = createSelector(
  [ getPosts ],
  (posts) => posts.reduce((total, post) => ++total, 0)
);
