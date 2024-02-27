
const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(),  2);
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 1);

const initialState = {
    isVisible: false,
    dataDict: {
        'timeToValue': '20:00:00',
        'timeFromValue': '07:25:00',
        'dateToValue': lastDayOfMonth.toISOString().split('T')[0],
        'dateFromValue': firstDayOfMonth.toISOString().split('T')[0],
        'Номер': 'Все',
        'Тип звонка': 'Все',
        'Запись': 'Все',
        'Врач': 'Все',
        'Имя администратора': 'Все',
        'Имя клиента': 'Все',
        'Был ли раньше': 'Все',
        'Долго': 'Все',
        'Спец Теги': 'Все',
    },
    filtersOptions: {

    },

};

export const SET_FILTERS_VISIBLE = 'SET_FILTERS_VISIBLE';
export const CLOSE_FILTERS = 'CLOSE_FILTERS';
export const UPDATE_FILTERS_LIST = 'UPDATE_FILTERS_LIST';
export const UPDATE_FILTERS_OPTIONS = 'UPDATE_FILTERS_OPTIONS';
export const SET_FILTERS_OPTIONS = 'SET_FILTERS_OPTIONS';
const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS_VISIBLE:
            return {
                ...state,
                isVisible: true,
            };
        case UPDATE_FILTERS_LIST:
            const [key, value] = action.payload;
            return {
                ...state,
                dataDict: {
                    ...state.dataDict,
                    [key]: value
                }
            };
        case UPDATE_FILTERS_OPTIONS:
            const [key_OPT, value_OPT] = action.payload;
            return {
                ...state,
                filtersOptions: {
                    ...state.filtersOptions,
                    [key_OPT]: value_OPT
                }
            };
        case SET_FILTERS_OPTIONS:
            return {
                ...state,
                filtersOptions: {
                    ...action.payload
                }
            };
        case CLOSE_FILTERS:
            return initialState;
        default:
            return state;
    }
};

export default filtersReducer;