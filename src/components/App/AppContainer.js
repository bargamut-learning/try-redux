import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost, updatePost } from '../../store/actionCreators/posts';

import App from './App';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post)),
  updatePost: (id, post) => dispatch(updatePost(id, post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
