import { delay } from 'redux-saga'
import { takeEvery, put, call, fork, select} from 'redux-saga/effects';
import { fetchNewListMovie, requestedListMovie, requestedListMovieSucceeded,
    requestedListMovieFailed, setValueListMovieLazyLoad, requestedListMovieLazyLoadSucceeded
} from '../../actions/Movie/listMovieAction';
import { fetchDataOption } from '../../utilities/fetchDataOption';
import { getStateListMovie } from '../../utilities/getState';

export function* watchFetchNewListMovie() {
    yield takeEvery('FETCH_NEW_LIST_MOVIE', fetchListMovieAsync);
    yield takeEvery('FETCH_LIST_MOVIE_LAZY_LOAD', fetchListMovieLazyLoadAsync);
}

//Get new list movie
function* fetchListMovieAsync() {
    try {
        const state = yield select(getStateListMovie);
        yield put(requestedListMovie());
        const data = yield call(() => {
            return fetch('/get_list_movie_for_user?current_page=1'
                +"&take=" + state.take, fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(requestedListMovieSucceeded(data));
    } catch (error) {
        console.log(error);
        yield put(requestedListMovieFailed(error));
    }
}

//Lazy load item
function* fetchListMovieLazyLoadAsync() {
    try {
        yield put(setValueListMovieLazyLoad());
        const state = yield select(getStateListMovie);
        const data = yield call(() => {
            return fetch('/get_list_movie_for_user?current_page=' + state.current_page
                +"&take=" + state.take, fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(requestedListMovieLazyLoadSucceeded(data));
    } catch (error) {
        console.log(error)
        yield put(requestedListMovieFailed(error));
    }
}


/////////
export default { watchFetchNewListMovie };
