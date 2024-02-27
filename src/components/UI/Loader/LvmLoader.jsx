import React from 'react';
import classes from './LvmLoader.module.css'
const LvmLoader = () => {
    return (
        <div className={classes.loadingSpinner}>
            <div className={classes.spinner}></div>
            <div className={classes.loadingText}>Загрузка данных...</div>
        </div>
    );
};

export default LvmLoader;