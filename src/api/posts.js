'use strict';

import { POSTS } from '../../mocks';

export default {
  fetchPost(id) {
    return POSTS.find((post) => post.id === id);
  },
};
