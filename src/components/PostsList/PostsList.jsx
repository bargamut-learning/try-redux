'use strict';

import * as React from 'react';
import PostItem from '../PostItem/PostItemContainer';

class PostsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postsLoading: false,
      posts: [],
    };

    this.fetchPosts = props.fetchPosts;
  }

  componentDidMount = () => {
    this.setState({ postsLoading: true });

    this.fetchPosts();
  }

  render() {
    const { posts, totalPosts } = this.props;

    const postsList = posts.length > 0
      ? posts.map((post) => <PostItem key={post.id} post={post} />)
      : <li>{this.state.postsLoading ? `Loading` : `No posts`}...</li>;

    return (
      <>
        <span>{totalPosts}</span>

        <ul className="posts-list">{postsList}</ul>
      </>
    );
  }
}

export default PostsList;
