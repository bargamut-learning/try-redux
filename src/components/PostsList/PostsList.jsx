'use strict';

import * as React from 'react';
import PostItem from '../PostItem/PostItemContainer';

function PostsList({ posts }) {
  const postsList = posts.length > 0
    ? posts.map((post) => <PostItem key={post.id} post={post} />)
    : <li>No posts...</li>;

  return <ul className="posts-list">{postsList}</ul>;
}

export default PostsList;
