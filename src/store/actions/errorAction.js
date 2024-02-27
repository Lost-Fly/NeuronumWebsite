import {ERROR_OCCURED, ERROR_SOLVED} from "../reducers/errorReducer";

export const setError = (message) => ({
    type: ERROR_OCCURED,
    payload: message
});

export const solveError = () => ({
    type: ERROR_SOLVED,
});
