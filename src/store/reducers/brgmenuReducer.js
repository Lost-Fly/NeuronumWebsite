import {Link} from "react-router-dom";
import classes from "../../components/UI/Navbar/LvmNavbar.module.css";
import React from "react";

const initialState = {
    isVisible: false,
    content: [{data: <Link to="/account" className={`${classes.bigBtn} ${classes.smallBtn} ${classes.link}`} >Личный кабинет</Link>, key: 1}, {data: <Link to="/main_calls_table" className={` ${classes.bigBtn} ${classes.smallBtn} ${classes.link}`}>Таблица звонков</Link>, key: 2 }, {data: <Link to="/dashboards" className={` ${classes.bigBtn} ${classes.smallBtn} ${classes.link}`}>Дашборды</Link>, key: 3}, {data: <Link to="/about" className={` ${classes.bigBtn} ${classes.smallBtn} ${classes.link}`}>О нас</Link>, key: 4}],
    header: 'Действия',
};

export const SET_BRG_VISIBLE = 'SET_BRG_VISIBLE';
export const CLOSE_BRG = 'CLOSE_BRG';

const brgmenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BRG_VISIBLE:
            return {
                ...state,
                isVisible: !state.isVisible,
            };
        case CLOSE_BRG:
            return {
                ...state,
                isVisible: false,
            };
        default:
            return state;
    }
};

export default brgmenuReducer;