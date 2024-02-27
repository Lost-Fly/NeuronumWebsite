import {CLOSE_MODAL, SET_VISIBLE} from "../reducers/modalReducer";

export const setVisible = ([data, type]) => ({
    type: SET_VISIBLE,
    payload: [data, type]
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});


