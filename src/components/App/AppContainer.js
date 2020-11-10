import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost, fetchPosts, updatePost } from '../../store/actionCreators/postsActionCreators';

import App from './App';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post)),
  updatePost: (id, post) => dispatch(updatePost(id, post)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
