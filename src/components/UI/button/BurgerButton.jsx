import React from 'react';
import classes from './BurgerBtn.module.css';
const BurgerButton = ({...props}) => {
    return (
        <div {...props} className={classes.burgerBtn}>
            <span/>
        </div>
    );
};

export default BurgerButton;