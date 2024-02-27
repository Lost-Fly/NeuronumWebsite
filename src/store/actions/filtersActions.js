import {
    CLOSE_FILTERS, SET_FILTERS_OPTIONS,
    SET_FILTERS_VISIBLE,
    UPDATE_FILTERS_LIST,
    UPDATE_FILTERS_OPTIONS
} from "../reducers/filtersReducer";

export const setFiltersVisible = () => ({
    type: SET_FILTERS_VISIBLE,
});

export const updateFiltersList = ([key, data]) => ({
    type: UPDATE_FILTERS_LIST,
    payload: [key, data],
});

export const updateFiltersOptions = ([key, data]) => ({
    type: UPDATE_FILTERS_OPTIONS,
    payload: [key, data],
});

export const setFiltersOptions = (dict) => ({
    type: SET_FILTERS_OPTIONS,
    payload: dict,
});

export const closeFilters = () => ({
    type: CLOSE_FILTERS,
});


