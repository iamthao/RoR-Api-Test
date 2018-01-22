export const requestUser = () => {
    return { type: 'REQUEST_USER' }
};

export const requestUserSuccess = (data) => {
    return { type: 'REQUEST_USER_SUCCESS', full_name: data.full_name }
};

export const requestUserError = () => {
    return { type: 'REQUEST_USER_ERROR' }
};

export const fetchCurrentUser = () => {
    return { type: 'FETCH_CURRENT_USER' }
};

export default { requestUser, requestUserSuccess,requestUserError, fetchCurrentUser }