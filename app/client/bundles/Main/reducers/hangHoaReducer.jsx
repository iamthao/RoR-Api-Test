import Immutable  from 'immutable';
const initDataHangHoa = {
    data: [],
    error_fetch: false,
    current_page: 1,
    take: 25,
    total_page: 1
};
const hangHoaReducer = (state = initDataHangHoa, action) => {
    switch (action.type) {
        case 'INIT_HANG_HOA':
            return initDataHangHoa;
        case 'GET_LIST_SP_SUCCESS':
            return Object.assign({}, state, {
                data: Immutable.List(action.data.data),
                total_page: action.data.total_page
            });

        //set paging
        case 'SET_VALUE_SP_PAGING':
            return Object.assign({}, state, {
                current_page: action.page
            });
        default:
            return state;
    }
};

export default hangHoaReducer;
