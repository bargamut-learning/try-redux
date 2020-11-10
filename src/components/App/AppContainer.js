import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createPost } from '../../store/actionCreators/postsActionCreators';

import App from './App';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
