import { all, fork } from 'redux-saga/effects';
import { watchFetchNewMovie } from './Movie/movieSaga';
import { watchFetchCurrentUser } from './User/userSaga';
import { watchFetchNewListMovie } from './Movie/listMovieSaga';
import {watchHangHoaSaga} from './HangHoa/hangHoaSaga'

function* rootSaga() {
  yield all([
    fork(watchFetchCurrentUser),
    fork(watchFetchNewMovie),
    fork(watchFetchNewListMovie),
    fork(watchHangHoaSaga)
  ])
}

export default rootSaga;
