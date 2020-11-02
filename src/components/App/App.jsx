import * as React from 'react';

function App({ text = `Default title`, image, posts = [], createPost, }) {
  const postTitleInput = React.createRef();

  const postsList = posts.length > 0
    ? posts.map((post) => <li key={post.id}>{post.title}</li>)
    : <li>No posts...</li>;


  const handleCreatePost = (event) => {
    event.preventDefault();

    createPost({ title: postTitleInput.current.value });
  };

  return (
    <>
      <h1>{text}</h1>

      <form onSubmit={handleCreatePost}>
        <input ref={postTitleInput} />

        <input type="submit" value="Create post" />
      </form>

      <ul className="posts-list">{postsList}</ul>

      <img src={image} />
    </>
  );
}

export default App;
