const initUser = {
    full_name: '',
    error_fetch: false
};
const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case 'REQUEST_USER':
            return initUser;
        case 'REQUEST_USER_SUCCESS':
            return Object.assign({}, state, {
                full_name: action.full_name,
                error_fetch: false
            });
        case 'REQUEST_USER_ERROR':
            return Object.assign({}, state, {
                full_name: '',
                error_fetch: true
            });
        default:
            return state;
    }
};

export default userReducer;