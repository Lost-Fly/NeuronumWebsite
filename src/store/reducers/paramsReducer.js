const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth()-5,  2);
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 1);

const initialState = {
    page: 0,
    limit: 100,
    dateStart: '01.01.2024',
    dateEnd: '28.02.2024',
    totalPages: 100,
};

export const SET_PAGE = 'SET_PAGE';
export const SET_LIMIT = 'SET_LIMIT';

export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_END_DATE = 'SET_END_DATE';
export const SET_START_DATE = 'SET_START_DATE';
const paramsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return { ...state, page: action.payload,  };
        case SET_LIMIT:
            return { ...state, limit: action.payload, };
        case SET_TOTAL_PAGES:
            return { ...state, totalPages: action.payload, };
        case SET_START_DATE:
            return { ...state, dateStart: action.payload, };
        case SET_END_DATE:
            return { ...state, dateEnd: action.payload, };
        default:
            return state;
    }
};

export default paramsReducer;