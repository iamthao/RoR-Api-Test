import { all, fork } from 'redux-saga/effects';
import { watchFetchNewMovie } from './Movie/movieSaga';
import { watchFetchCurrentUser } from './User/userSaga';
import { watchFetchNewListMovie } from './Movie/listMovieSaga';

function* rootSaga() {
  yield all([
    fork(watchFetchCurrentUser),
    fork(watchFetchNewMovie),
    fork(watchFetchNewListMovie)
  ])
}

export default rootSaga;
