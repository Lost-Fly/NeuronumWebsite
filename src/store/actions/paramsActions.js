import {SET_END_DATE, SET_LIMIT, SET_PAGE, SET_START_DATE, SET_TOTAL_PAGES} from "../reducers/paramsReducer";


export const setPage = (number) => ({
    type: SET_PAGE,
    payload: number
});

export const setLimit = (number) => ({
    type: SET_LIMIT,
    payload: number
});
export const setTotalPages = (number) => ({
    type: SET_TOTAL_PAGES,
    payload: number
});
export const setStartData = (string) => ({
    type: SET_START_DATE,
    payload: string
});
export const setEndData = (string) => ({
    type: SET_END_DATE,
    payload: string
});

