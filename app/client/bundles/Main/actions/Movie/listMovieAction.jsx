//Get new list movie
export const fetchNewListMovie = () => {
    return { type: 'FETCH_NEW_LIST_MOVIE' }
};

export const requestedListMovie = () => {
    return { type: 'REQUESTED_LIST_MOVIE' }
};

export const requestedListMovieSucceeded = (data) => {
    return {
        type: 'REQUESTED_LIST_MOVIE_SUCCEEDED',
        data: data.data,
        total_page: data.total_page
    }
};

export const requestedListMovieFailed = (error) => {
    return { type: 'REQUESTED_LIST_MOVIE_FAILED' }
};

//lazy loading item
export const fetchListMovieLazyLoad = () => {
    return { type: 'FETCH_LIST_MOVIE_LAZY_LOAD' }
};

export const setValueListMovieLazyLoad = () => {
    return { type: 'SET_VALUE_LIST_MOVIE_LAZY_LOAD' }
};

export const requestedListMovieLazyLoadSucceeded = (data) => {
    return {
      type: 'REQUESTED_LIST_MOVIE_LAZY_LOAD_SUCCEEDED',
      data: data.data,
      total_page: data.total_page
    }
};

export default { fetchNewListMovie, requestedListMovie, requestedListMovieSucceeded,
    requestedListMovieFailed, fetchListMovieLazyLoad, setValueListMovieLazyLoad,
     requestedListMovieLazyLoadSucceeded}
