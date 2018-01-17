import Immutable from 'immutable';
const initMovie = {
    id: '',
    name: '',
    hint: '',
    type_of: 0,
    error_fetch: false,
    answer_input: '',
    alert_msg_type: 0, //1: please input // 2: tra loi sai //3: tra loi dung,
    data: [],
    is_complete: false, //complete hint
    count: 0
};
const movieReducer = (state = initMovie, action) => {
    switch (action.type) {
        case 'REQUESTED_MOVIE':
            return initMovie;

        case 'REQUESTED_MOVIE_SUCCEEDED':
            return Object.assign({}, state, {
                data: Immutable.List(action.data)
            });

        case 'REQUESTED_MOVIE_FAILED':
            return Object.assign({}, state, {
                error_fetch: true
            });

        case 'MOVIE_SET_SENTENCE_TO_LEARN':
            var firstItem = state.data.first();
            return Object.assign({}, state, {
                id: firstItem.id,
                hint: firstItem.hint,
                type_of: firstItem.type_of,
                count: state.data.count()
            });

        //Check answer
        case 'CHECK_ANSWER_SUCCEEDED':
            return Object.assign({}, state, {
                answer: action.answer,
                alert_msg_type: action.answer_is_true ? 3 : 2,
                is_complete: true,
                answer_input: state.answer_input
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

        //Next sentence
        case 'ON_CLICK_NEXT_SENTENCE':
            var newData = state.data.delete(0);
            var firstItem = newData.first();
            return Object.assign({}, state, {
                id: firstItem.id,
                name: '',
                hint: firstItem.hint,
                type_of: firstItem.type_of,
                error_fetch: false,
                answer_input: '',
                alert_msg_type: 0, //1: please input // 2: tra loi sai //3: tra loi dung,
                data: newData,
                is_complete: false, //complete hint
                count: newData.count()
            });

        default:
            return state;
    }
};

export default movieReducer;
