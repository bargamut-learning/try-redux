'use strict';

async function fetchPosts() {
  return await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((respose) => respose.json());
}

export default {
  fetchPosts
};
