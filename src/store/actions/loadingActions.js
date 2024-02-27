import {FINISHED_LOAD, LOADING} from "../reducers/loadingReducer";

export const setLoading = () => ({
    type: LOADING,
});

export const unsetLoading = () => ({
    type: FINISHED_LOAD,
});
