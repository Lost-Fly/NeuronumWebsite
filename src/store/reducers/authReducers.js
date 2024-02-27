const initialState = {
    isAuthenticated: false,
    userKey: {'email': '', 'password': ''}
};

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SET_USER_KEY = 'SET_USER_KEY';
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case SET_USER_KEY:
            return {
                ...state,
                userKey: {
                    ...action.payload,
                }
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                userKey: {'email': '', 'password': ''}
            };
        default:
            return state;
    }
};

export default authReducer;