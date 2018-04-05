import { takeEvery, put, call, fork, select } from 'redux-saga/effects';
import {
    initHangHoa, getListSPSuccess,
    setValueSPPaging
} from '../../actions/HangHoa/hangHoaActions';
import { fetchDataOption } from '../../utilities/fetchDataOption';
import { getStateHangHoa } from '../../utilities/getState';


export function* watchHangHoaSaga() {
    yield takeEvery('CALL_GET_LIST_SP', callGetListSP);
    yield takeEvery('CALL_ADD_NEW_SP', callAddNewSP);
    yield takeEvery('CALL_SP_PAGING', callPagingSP);
}

function* callGetListSP() {
    try {
        yield put(initHangHoa());
        const state = yield select(getStateHangHoa);
        const data = yield call(() => {
            return fetch('/get_list_sp?current_page=1' +"&take=" + state.take, fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(getListSPSuccess(data));
    } catch (error) {
        console.log('callGetListSP Error')
    }
}

//Add new
function* callAddNewSP(action) {
    try {
        const data = yield call(() => {
            return fetch('/add_new_sp?masp='+ action.masp +'&tensp='+ action.tensp + '&giaban='+ action.giaban + '&giavon='+ action.giavon + '&tonkho='+ action.tonkho, fetchDataOption('POST'))
                .then(res => res.json())
        });
        const state = yield select(getStateHangHoa);
        const data1 = yield call(() => {
            return fetch('/get_list_sp?current_page='+ state.current_page +"&take=" + state.take, fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(getListSPSuccess(data1));
    } catch (error) {
        console.log('callAddNewSP Error')
    }
}

//PAging
function* callPagingSP(action) {
    try {
        yield put(setValueSPPaging(action.page));
        const state = yield select(getStateHangHoa);
        const data = yield call(() => {
            return fetch('/get_list_sp?current_page='+ state.current_page +"&take=" + state.take, fetchDataOption('GET'))
                .then(res => res.json())
        });
        yield put(getListSPSuccess(data));
    } catch (error) {
        console.log('callGetListSP Error')
    }
}


/////////
export default { watchHangHoaSaga };
