import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PostsList from './PostsList';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
