//Get new movie
export const fetchNewMovie = (id) => {
    return {
        type: 'FETCH_NEW_MOVIE',
        id: id
    }
};

export const requestedMovie = () => {
    return { type: 'REQUESTED_MOVIE' }
};

export const requestedMovieSucceeded = (data) => {
    return {
        type: 'REQUESTED_MOVIE_SUCCEEDED',
        data: data.data
    }
};

export const requestedMovieFailed = (error) => {
    return { type: 'REQUESTED_MOVIE_FAILED' }
};

export const movieSetSentenceToLearn  = () => {
    return { type: 'MOVIE_SET_SENTENCE_TO_LEARN' }
};

//OnChange text input
export const onChangeTextAnswerInput = (value) => {
    return { type: 'ON_CHANGE_TEXT_ANSWER_INPUT', answer_input: value}
};

export const errorNotInputAnswer = () => {
    return { type: 'ERROR_NOT_INPUT_ANSWER' }
};

//Check answer
export const onClickCheckAnswer = () => {
    return { type: 'ON_CLICK_CHECK_ANSWER'}
};

export const checkAnswerSucceeded = (data) => {
    return {
        type: 'CHECK_ANSWER_SUCCEEDED',
        answer_is_true: data.answer_is_true,
        answer: data.answer
    }
};


export default { fetchNewMovie, requestedMovie, requestedMovieSucceeded, requestedMovieFailed,
    movieSetSentenceToLearn,onChangeTextAnswerInput, onClickCheckAnswer, errorNotInputAnswer }
