import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import createPost from '../../store/actionCreators/createPost';

import App from './App';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  createPost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
