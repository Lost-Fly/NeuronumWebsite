const initialState = {
    isVisible: false,
    content: '',
    type: ''
};

export const SET_VISIBLE = 'SET_VISIBLE';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBLE:
            return {
                ...state,
                isVisible: true,
                content: action.payload[0],
                type: action.payload[1]
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isVisible: false,
                // content: '',
                type: ''
            };
        default:
            return state;
    }
};

export default modalReducer;