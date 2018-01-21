import { combineReducers } from 'redux';
import movieReducer from '../reducers/movieReducer';
import userReducer from '../reducers/userReducer';
import listMovieReducer from '../reducers/listMovieReducer';

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    listMovieReducer
})
export default rootReducer;
