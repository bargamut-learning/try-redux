import * as React from 'react';
import PostsList from '../PostsList/PostsListContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.createPost = this.props.createPost;
    this.fetchPosts = this.props.fetchPosts;

    this.postTitleInput = React.createRef();
  }

  componentDidMount = () => {
    this.fetchPosts();
  }

  handleCreatePost = (event) => {
    event.preventDefault();

    this.createPost({ title: this.postTitleInput.current.value });
  };

  render() {
    const { text = `Default title`, image } = this.props;

    return (
      <>
        <h1>{this.text}</h1>

        <form onSubmit={this.handleCreatePost}>
          <input ref={this.postTitleInput} />

          <input type="submit" value="Create post" />
        </form>

        <PostsList />

        <img src={image} />
      </>
    );
  }
}

export default App;
