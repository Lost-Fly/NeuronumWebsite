const initialState = {
    errorState: false,
    errorMessage: ''
};

export const ERROR_OCCURED = 'ERROR_OCCURED';
export const ERROR_SOLVED = 'ERROR_SOLVED';
const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_OCCURED:
            return {
                ...state,
                errorState: true,
                errorMessage: action.payload,
            };
        case ERROR_SOLVED:
            return {
                ...state,
                errorState: false,
                errorMessage: '',
            };
        default:
            return state;
    }
};

export default errorReducer;