const initialState = {
    data: [],
    isDataSetted: false,
    dataAmount: 0,
};

export const SET_DATA = 'SET_DATA';
export const SET_FILTERED_DATA = 'SET_FILTERED_DATA';

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                // data: Array.from(new Set([...state.data, ...action.payload].map(obj => JSON.stringify(obj))), str => JSON.parse(str)),
                // delete repeating items on front side if needed
                isDataSetted: true,
                dataAmount: [...state.data, ...action.payload].length
            };
        case SET_FILTERED_DATA:
            return {
                ...state,
                data: [...action.payload],
                // data: Array.from(new Set([...state.data, ...action.payload].map(obj => JSON.stringify(obj))), str => JSON.parse(str)),
                // delete repeating items on front side if needed
                isDataSetted: true,
                dataAmount: [...action.payload].length
            };
        default:
            return state;
    }
};

export default tableReducer;