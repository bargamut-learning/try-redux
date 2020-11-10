'use strict';

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { POSTS_FETCH_REQUESTED } from '../actionTypes/postsActionTypes';
import { fetchPostsFailed, fetchPostsSucceeded } from '../actionCreators/postsActionCreators';
import API from '../../api/postsAPI';

// Imitation async calls
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function* fetchPost() {
  yield delay(1000);

  try {
    const posts = yield call(API.fetchPosts);

    // Dispatch actions
    yield put(fetchPostsSucceeded(posts));
  } catch (error) {
    yield put(fetchPostsFailed({ message: error.message }));
  }
}

// Call fetchPosts by every dispatch of "POSTS_FETCH_REQUESTED"
// Allows fetching data of many posts in same time
function* watchFetchPostsSaga() {
  yield takeEvery(POSTS_FETCH_REQUESTED, fetchPost);
}

/* or

Don't allows fetching data of many posts in same time
If you have new dispatch when previous is pending
then pending is canceled & works only latest

function* watchFetchPostsSaga() {
  yield takeLatest(`POST_FETCH_REQUESTED`, fetchPosts);
}
*/

export default watchFetchPostsSaga;
