export function login(payload) {
    return function (dispatch) {
        dispatch({ type: 'LOGIN', payload });
    }
}
