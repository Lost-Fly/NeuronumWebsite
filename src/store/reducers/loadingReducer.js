const initialState = {
    isLoading: false,
};

export const LOADING = 'LOADING';
export const FINISHED_LOAD = 'FINISHED_LOAD';
const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true, };
        case FINISHED_LOAD:
            return { ...state, isLoading: false, };
        default:
            return state;
    }
};

export default loadingReducer;