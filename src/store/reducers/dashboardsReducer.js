const initialState = {
    data: [],
    isDataSetted: false,
    dataAmount: 0,
};

export const SET_DASHBOARDS_DATA = 'SET_DASHBOARDS_DATA';

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DASHBOARDS_DATA:
            return {
                ...state,
                data: [...state.data, ...action.payload],
                isDataSetted: true,
                dataAmount: [...state.data, ...action.payload].length
            };

        default:
            return state;
    }
};

export default dashboardReducer;