import { combineReducers } from 'redux';
import movieReducer from '../reducers/movieReducer';
import userReducer from '../reducers/userReducer';
import listMovieReducer from '../reducers/listMovieReducer';
import hangHoaReducer from '../reducers/hangHoaReducer';

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    listMovieReducer,
    hangHoaReducer
})
export default rootReducer;
