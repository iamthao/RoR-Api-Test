import Immutable  from 'immutable';
const initListMovie = {
    data: [],
    error_fetch: false,
    current_page: 1,
    take: 15,
    total_page: 1,
    is_loading: true
};

const listMovieReducer = (state = initListMovie, action) => {
    switch (action.type) {
        case 'REQUESTED_LIST_MOVIE':
            return initListMovie;
        case 'REQUESTED_LIST_MOVIE_SUCCEEDED':
            return Object.assign({}, state, {
                data: Immutable.List(action.data),
                total_page: action.total_page,
                is_loading: false
            });
        case 'REQUESTED_LIST_MOVIE_FAILED':
            return Object.assign({}, state, {
                error_fetch: true,
                is_loading: false
            });

        //lazy load item
        case 'SET_VALUE_LIST_MOVIE_LAZY_LOAD':
            return Object.assign({}, state, {
                current_page: state.current_page + 1,
                is_loading: true
            });
        case 'REQUESTED_LIST_MOVIE_LAZY_LOAD_SUCCEEDED':
            var newData = state.data.concat(Immutable.List(action.data));
            return Object.assign({}, state, {
                is_loading: false,
                data : newData
            });
        default:
            return state;
    }
};

export default listMovieReducer;
