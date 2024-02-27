import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.module.css';
import {useDispatch} from "react-redux";
import {setLogin, setUserKey} from "./store/actions/authActions";
import classes from "./styles/App.module.css";
import BurgerMenu from "./components/UI/SideMenu/BurgerMenu";

import { ThemeProvider } from "@material-tailwind/react";
import "./assets/styles/tailwind.css";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(setLogin());
        }
    }, [])

    return (
        <BrowserRouter>
            <div className={classes.app}>
                <ThemeProvider>
                        <AppRouter/>
                </ThemeProvider>
                <BurgerMenu />
            </div>
        </BrowserRouter>
    );
};

export default App;