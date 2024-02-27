import React, {useState} from 'react';
import LvmButton from "../components/UI/button/LvmButton";
import {useDispatch, useSelector} from "react-redux";
import {setLogin, setUserKey} from "../store/actions/authActions";
import {Link} from "react-router-dom";
import {setError, solveError} from "../store/actions/errorAction";
import {LoginCard} from "../components/LoginCard";
import {Button} from "@material-tailwind/react";

const Login = () => {
    const dispatch = useDispatch();
    const userKey = useSelector((state) => state.auth.userKey);
    const errorMessage = useSelector((state) => state.error.errorMessage);
    const errorState = useSelector((state) => state.error.errorState);
    const [inpValue, setInputValue] = useState('');

    const login = event => {
        event.preventDefault();

        if (inpValue === '123') {
            if (errorState){
                dispatch(solveError())
            }
            dispatch(setUserKey(event.target.value));
            dispatch(setLogin());
            localStorage.setItem('auth', 'true')
        } else {
            dispatch(setError("Неверное имя пользователя или пароль!"))
            if (errorState){
                alert(errorMessage)
            }
        }
    }


    return (
        <div className="page">
            <div className="flex place-content-center content-end items-center">

                <div className="items-center place-content-center flex-col mt-40">

                    <main className="flex mt-50 items-center">
                        <LoginCard/>
                    </main>

                    {/*<header className="mt-10 place-content-center items-center flex">*/}
                    {/*    <Link to="https://lvmlabs.ru" >*/}
                    {/*       /!*<h1 className="underline-offset-1 decoration-solid decoration-white bg-mainColor bg-clip-border-5 text-white font-bold hover:underline ">Вернуться на лендинг</h1>*!/*/}
                    {/*        <Button variant="color" fullWidth className="bg-mainColor">*/}
                    {/*            <h1 className="font-bold">Вернуться на лендинг</h1>*/}
                    {/*        </Button>*/}
                    {/*    </Link>*/}
                    {/*</header>*/}

                </div>

            </div>
        </div>
    );
};

export default Login;