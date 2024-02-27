import {SET_DASHBOARDS_DATA} from "../reducers/dashboardsReducer";

export const setDashBoardsData = (data) => ({
    type: SET_DASHBOARDS_DATA,
    payload: data,
});
