import React from 'react';
import classes from './PnBtn.module.css';
const BurgerButton = ({...props}) => {
    return (
        <div {...props} className={classes.pnBtn}>
            <i className="material-icons">filter_list</i>
        </div>
    );
};

export default BurgerButton;