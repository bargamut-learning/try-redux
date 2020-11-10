'use strict';

import * as React from 'react';

function PostItem({ post, updatePost }) {
  const handleUpdatePost = (id, title) => (event) => {
    event.preventDefault();

    updatePost(id, { title: `${title} updated!` });
  };

  return (
    <li>
      <button onClick={handleUpdatePost(post.id, post.title)}>Update</button>
      &nbsp;

      {post.title}
    </li>
  );
}

export default PostItem;
