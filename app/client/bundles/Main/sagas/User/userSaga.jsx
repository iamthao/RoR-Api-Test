import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import { requestUser, requestUserSuccess,requestUserError,
    fetchCurrentUser
} from '../../actions/User/userAction';
import { fetchDataOption } from '../../utilities/fetchDataOption';

//Get current user
export function* watchFetchCurrentUser() {
    yield takeEvery('FETCH_CURRENT_USER', fetchCurrentUserAsync);
}

function* fetchCurrentUserAsync() {
    try {
        yield put(requestUser());
        const data = yield call(() => {
            return fetch('/get_current_user', fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(requestUserSuccess(data));
    } catch (error) {
        yield put(requestUserError());
    }
}

/////////
export default { watchFetchCurrentUser };
