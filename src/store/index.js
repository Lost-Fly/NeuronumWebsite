import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import tableReducer from "./reducers/tableReducer";
import authReducer from "./reducers/authReducers";
import loadingReducer from "./reducers/loadingReducer";
import errorReducer from "./reducers/errorReducer";
import paramsReducer from "./reducers/paramsReducer";
import modalReducer from "./reducers/modalReducer";
import brgmenuReducer from "./reducers/brgmenuReducer";
import filtersReducer from "./reducers/filtersReducer";

const rootReducer = combineReducers({
    tabledata: tableReducer,
    auth: authReducer,
    loading: loadingReducer,
    error: errorReducer,
    params: paramsReducer,
    modals: modalReducer,
    brgmenu: brgmenuReducer,
    filters: filtersReducer,
});

export const storeW = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));