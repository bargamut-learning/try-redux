import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../../store/actionCreators/postsActionCreators';
import { getPosts, getPostsTotal } from '../../store/selectors/postsSelector';

import PostsList from './PostsList';

const mapStateToProps = (state, ownProps) => ({
  posts: getPosts(state),
  totalPosts: getPostsTotal(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPosts: (refreshing) => dispatch(fetchPosts(refreshing)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
