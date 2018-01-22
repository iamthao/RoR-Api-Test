import Immutable from 'immutable';
const initMovie = {
    id: '',
    name: '',
    hint: '',
    type_of: 0,
    error_fetch: false,
    answer_input: '',
    alert_msg_type: 0, //1: please input // 2: tra loi sai //3: tra loi dung,
    data: null,
    is_complete: false, //complete hint
    answer: ''
};
const movieReducer = (state = initMovie, action) => {
    switch (action.type) {
        case 'REQUESTED_MOVIE':
            return initMovie;

        case 'REQUESTED_MOVIE_SUCCEEDED':
            return Object.assign({}, state, {
                data: action.data
            });

        case 'REQUESTED_MOVIE_FAILED':
            return Object.assign({}, state, {
                error_fetch: true
            });

        case 'MOVIE_SET_SENTENCE_TO_LEARN':
            return Object.assign({}, state, {
                id: state.data.id,
                hint: state.data.hint,
                type_of: state.data.type_of
            });

        //Check answer
        case 'CHECK_ANSWER_SUCCEEDED':
            return Object.assign({}, state, {
                answer: action.answer,
                alert_msg_type: action.answer_is_true ? 3 : 2,
                is_complete: true,
                answer_input: state.answer_input,
                answer: action.answer
            });


        //Onchange input
        case 'ON_CHANGE_TEXT_ANSWER_INPUT':
            return Object.assign({}, state, {
                answer_input: action.answer_input
            });
        case 'ERROR_NOT_INPUT_ANSWER':
            return Object.assign({}, state, {
                alert_msg_type: 1
            });

        default:
            return state;
    }
};

export default movieReducer;
