'use strict';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// import API from '...';

function* fetchPost(action) {
  try {
    const post = yield call(API.fetchPosts, action.payload.postId);

    yield put({ type: `POST_FETCH_SUCCEEDED`, post });
  } catch (error) {
    yield put({ type: `POST_FETCH_FAILED`, message: error.message });
  }
}

// Call fetchPosts by every dispatch of "POST_FETCH_REQUESTED"
// Allows fetching data of many posts in same time
function* mySaga() {
  yield takeEvery(`POST_FETCH_REQUESTED`, fetchPost);
}

/* or

Don't allows fetching data of many posts in same time
If you have new dispatch when previous is pending
then pending is canceled & works only latest

function* mySaga() {
  yield takeLatest(`POST_FETCH_REQUESTED`, fetchPosts);
}
*/

export default mySaga;
