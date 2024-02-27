import React from 'react';
import classes from "./TimeSelect.module.css";
import {useDispatch, useSelector} from "react-redux";
import cl from "./TimeSelect.module.css";
import {updateFiltersList} from "../../../store/actions/filtersActions";

const TimeSelect = ({props}) => {
    const dispatch = useDispatch();
    const timeToValue = useSelector(state => state.filters.dataDict['timeToValue'])
    const timeFromValue = useSelector(state => state.filters.dataDict['timeFromValue'])
    const isVisible = useSelector(state => state.filters.isVisible)
    const rootClasses = [cl.myFilter]

    if (isVisible) {
        rootClasses.push(cl.active);
    }
    const handleTimeToChange = (e) => {
        dispatch(updateFiltersList(['timeToValue', e.target.value + ':00']))
    };
    const handleTimeFromChange = (e) => {
        dispatch(updateFiltersList(['timeFromValue', e.target.value + ':00']))
    };

    return (
        <div className={rootClasses.join(' ')}>
                <label htmlFor="timeFrom" style={{fontSize:"12px"}}>Время от:</label>
                <input
                    className={classes.myInput}
                    type="time"
                    id="timeFrom"
                    value={timeFromValue}
                    onChange={handleTimeFromChange}
                ></input>
                <label htmlFor="timeTo" style={{fontSize:"12px"}}>Время до:</label>
                <input
                    className={classes.myInput}
                    type="time"
                    id="timeTo"
                    value={timeToValue}
                    onChange={handleTimeToChange}
                ></input>
        </div>
    );
};

export default TimeSelect;