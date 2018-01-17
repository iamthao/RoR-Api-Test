const counts = (state = 0, action) => {
    switch (action.type) {
        case 'TANG':
            return state + 1;

        case 'GIAM':
            return state - 1;

        default:
            return state;
    }
}
export default counts