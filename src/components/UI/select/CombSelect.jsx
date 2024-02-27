import React, {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import cl from "./CombSelect.module.css";
import classes from "./CombSelect.module.css";
import {updateFiltersList} from "../../../store/actions/filtersActions";
import useDebounce from "../../../hooks/useDebounce";

const CombinedFilter = ({props}) => {
    const dispatch = useDispatch();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const inputRef = useRef(null);
    const isVisible = useSelector(state => state.filters.isVisible)
    const optionData = useSelector(state => state.filters.filtersOptions)
    const [inputValue, setInputValue] = useState('Все');
    const rootClasses = [cl.MycombinedFilter]
    const debouncedUpdate = useDebounce(updateFilters, 600);
    let options = []
    if (optionData[props]) {
        options = ['Все',...optionData[props]]
    }else{
        options = ['Все']
    }

    function updateFilters([props, value]) {
        dispatch(updateFiltersList([props, value]));
    }

    if (isVisible) {
        rootClasses.push(cl.active);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        debouncedUpdate([props, e.target.value]);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleOptionClick = (option) => {
        setInputValue(option);
        dispatch(updateFiltersList([props, option]))
        setIsDropdownVisible(false);
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
            <div className={classes.MyinputCont}>
                <input
                    className={classes.myInput}
                    type="text"
                    placeholder="Фильтр..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={toggleDropdown}
                    onKeyDown={handleEnterKey}
                />
                <i style={{marginLeft:"-20px", marginBottom:"0px"}} className="material-icons" onClick={toggleDropdown}>arrow_drop_down</i>
            </div>
            {isDropdownVisible && (
                <ul className={classes.Mydropdown} onClick={(e) => e.stopPropagation()}>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)} className={classes.MydropdownItem}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CombinedFilter;
