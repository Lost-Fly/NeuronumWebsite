import React from 'react';
import LvmButton from "../button/LvmButton";
import {Link} from "react-router-dom";
import {setLogout} from "../../../store/actions/authActions";
import {useDispatch} from "react-redux";
import classes from './LvmNavbar.module.css';
import BurgerButton from "../button/BurgerButton";
import {setBrgVisible} from "../../../store/actions/brgmenuActions";

const LvmNavbar = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setLogout());
        localStorage.removeItem('auth')
    }


    return (

            <div className={classes.navBar}>

                <div className={` ${classes.brgBtn} ${classes.hideOnBig}`}>
                    <BurgerButton onClick={() => dispatch(setBrgVisible(['','']))}/>
                </div>

                <div className={` ${classes.navbar_links} ${classes.hideOnSmall} ${classes.showOnBig}`}>
                    <Link to="/account" className={` ${classes.link} ${classes.bigBtn}`}>Личный кабинет</Link>
                    <Link to="/main_calls_table" className={` ${classes.link} ${classes.bigBtn}`}>Таблица звонков</Link>
                    <Link to="/dashboards" className={` ${classes.link} ${classes.bigBtn}`}>Дашборды</Link>
                    <Link to="/about" className={` ${classes.link} ${classes.bigBtn}`}>О нас</Link>
                </div>

                <div className={` ${classes.exitBtn} ${classes.hideOnSmall} ${classes.showOnBig}`}>
                    <LvmButton onClick={logout}>
                        Выйти
                    </LvmButton>
                </div>

            </div>

    );
};

export default LvmNavbar;