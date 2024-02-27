import React from 'react';
import classes from "./DataSelect.module.css";
import {useDispatch, useSelector} from "react-redux";
import cl from "./DataSelect.module.css";
import {updateFiltersList} from "../../../store/actions/filtersActions";
import {formatDate} from "../../../utils/tabledata";

const DataSelect = ({props}) => {
    const dispatch = useDispatch();
    const dateToValue = useSelector(state => state.filters.dataDict['dateToValue'])
    const dateFromValue = useSelector(state => state.filters.dataDict['dateFromValue'])
    const isVisible = useSelector(state => state.filters.isVisible)
    const rootClasses = [cl.myFilter]


    if (isVisible) {
        rootClasses.push(cl.active);
    }

    const handleDateToChange = (e) => {
        dispatch(updateFiltersList(['dateToValue', e.target.value]))
    };
    const handleDateFromChange = (e) => {
        dispatch(updateFiltersList(['dateFromValue', e.target.value]))
    };

    return (
        <div className={rootClasses.join(' ')}>
                <label htmlFor="dateFrom" style={{fontSize:"12px"}}>Дата от:</label>
                <input
                    className={classes.myInput}
                    type="date"
                    id="dateFrom"
                    value={dateFromValue}
                    onChange={handleDateFromChange}
                ></input>
                <label htmlFor="dateTo" style={{fontSize:"12px"}}>Дата до:</label>
                <input
                    className={classes.myInput}
                    type="date"
                    id="dateTo"
                    value={dateToValue}
                    onChange={handleDateToChange}
                ></input>
        </div>
    );
};

export default DataSelect;