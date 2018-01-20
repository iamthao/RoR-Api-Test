import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import {
    fetchNewMovie, requestedMovie, requestedMovieSucceeded,
    movieSetSentenceToLearn, requestedMovieFailed, setTextInput,
    checkAnswerSucceeded, errorNotInputAnswer
} from '../../actions/Movie/movieAction';
import { fetchDataOption } from '../../utilities/fetchDataOption';
import { getStateMovie } from '../../utilities/getState';


export function* watchFetchNewMovie() {
    yield takeEvery('FETCH_NEW_MOVIE', fetchMovieAsync);
    yield takeEvery('ON_CLICK_CHECK_ANSWER', checkAnswerAsync);
}

//Get new movie
function* fetchMovieAsync(action) {
    try {
        yield put(requestedMovie());
        const data = yield call(() => {

            return fetch('/get_part_for_move_id?id=' + action.id, fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(requestedMovieSucceeded(data));
        yield put(movieSetSentenceToLearn());
    } catch (error) {
        console.log('error', error)
        yield put(requestedMovieFailed(error));
    }
}
//Check answer
function* checkAnswerAsync() {
    try {
        const state = yield select(getStateMovie);
        if(state.answer_input.trim()!==''){
            const data = yield call(() => {
                return fetch('/check_answer_for_hint?id=' + state.id
                    + '&answer_input=' + state.answer_input, fetchDataOption('GET'))
                    .then(res => res.json())
            });
            yield put(checkAnswerSucceeded(data));
        }
        else{
            yield put(errorNotInputAnswer());
        }
    } catch (error) {
        console.log('error', error)
        yield put(requestedMovieFailed(error));
    }
}


/////////
export default { watchFetchNewMovie };
