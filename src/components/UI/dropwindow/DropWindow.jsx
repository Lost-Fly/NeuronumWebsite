import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from "react-redux";
import cl from "./Dropwindow.module.css";
import classes from "./Dropwindow.module.css";

const DropWindow = ({children, props}) => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const inputRef = useRef(null);
    const isVisible = useSelector(state => state.filters.isVisible)
    const rootClasses = [cl.combinedFilter]

    if (isVisible) {
        rootClasses.push(cl.active);
    }
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setIsDropdownVisible(false);
        }
    };

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            setIsDropdownVisible(false);
        }
    };


    useEffect(() => {
        document.addEventListener("keydown", handleEnterKey);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("keydown", handleEnterKey);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className={rootClasses.join(' ')} ref={inputRef}>
            <div>
            <div className={classes.inputCont}>
                <div
                    className={classes.myInput}
                    onClick={toggleDropdown}
                >Фильтр</div>
                <i style={{marginLeft:"-27%", marginBottom:"0px"}} className="material-icons" onClick={toggleDropdown}>arrow_drop_down</i>
            </div>
            {isDropdownVisible && (
                <div className={classes.dropdown} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            )}
            </div>
        </div>
    );
};

export default DropWindow;
