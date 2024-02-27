import React from 'react';
import classes from './LvmButton.module.css';
const LvmButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default LvmButton;