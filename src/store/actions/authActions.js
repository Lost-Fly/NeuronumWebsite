import {LOGIN, LOGOUT,SET_USER_KEY} from "../reducers/authReducers";

export const setLogin = () => ({
    type: LOGIN,
});

export const setUserKey = (data) => ({
    type: SET_USER_KEY,
    payload: data,
});

export const setLogout = () => ({
    type: LOGOUT,
});
