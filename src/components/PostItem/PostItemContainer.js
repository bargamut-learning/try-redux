import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updatePost } from '../../store/actionCreators/postsActionCreators';

import PostItem from './PostItem';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePost: (id, post) => dispatch(updatePost(id, post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
