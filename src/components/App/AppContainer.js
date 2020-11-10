import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts, createPost } from '../../store/actionCreators/postsActionCreators';

import App from './App';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
