import {CLOSE_BRG, SET_BRG_VISIBLE} from "../reducers/brgmenuReducer";

export const setBrgVisible = ([data, header]) => ({
    type: SET_BRG_VISIBLE,
    payload: [data, header]
});

export const closeBrg = () => ({
    type: CLOSE_BRG,
});


