import React from 'react';
import {useSelector} from "react-redux";
import cl from "./LvmSelect.module.css";

const LvmSelect = () => {

    const isVisible = useSelector(state => state.filters.isVisible)

    const rootClasses = [cl.myFilter]


    if (isVisible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <select>
                <input type="text" placeholder="Введите значение для фильтра" />
                <option value="">All</option>
                <option value="">All1</option>
                <option value="">All5</option>
                <option value="">All3</option>
                <option value="">All4</option>
            </select>
        </div>
    );
};

export default LvmSelect;