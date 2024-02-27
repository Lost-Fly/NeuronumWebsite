import {SET_DATA, SET_FILTERED_DATA} from "../reducers/tableReducer";

export const setData = (data) => ({
    type: SET_DATA,
    payload: data,
});

export const setFilteredData = (data) => ({
    type: SET_FILTERED_DATA,
    payload: data,
});