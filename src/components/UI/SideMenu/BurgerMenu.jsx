import React from 'react';
import classes from "./BurgerMenu.module.css";
import cl from './BurgerMenu.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setBrgVisible} from "../../../store/actions/brgmenuActions";

const BurgerMenu = () => {
    const dispatch = useDispatch();

    const header = useSelector((state) => state.brgmenu.header)
    const items = useSelector((state) => state.brgmenu.content)
    const isVisible = useSelector((state) => state.brgmenu.isVisible)

    const rootClasses = [cl.menu]

    if (isVisible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => (dispatch(setBrgVisible(['',''])))}>
            <div className={classes.menuContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.menuHeader}>{header}</div>
                <div className={classes.ulBrg}>
                    {items.map(item =>
                        <div key={item.key}>
                            {item.data}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;