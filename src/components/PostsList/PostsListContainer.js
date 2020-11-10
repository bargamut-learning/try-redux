import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../../store/actionCreators/postsActionCreators';

import PostsList from './PostsList';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: (refreshing) => dispatch(fetchPosts(refreshing)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
