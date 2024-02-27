import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setLogin, setUserKey} from "../store/actions/authActions";
import {setError, solveError} from "../store/actions/errorAction";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount, transformData, transformFilterDict} from "../utils/tabledata";
import {setPage, setTotalPages} from "../store/actions/paramsActions";
import {setFilteredData} from "../store/actions/tableActions";
import {useResFetching} from "../hooks/useResFetching";

export function LoginCard() {
    const dispatch = useDispatch();
    const userKey = useSelector((state) => state.auth.userKey);
    const errorMessage = useSelector((state) => state.error.errorMessage);
    const errorState = useSelector((state) => state.error.errorState);
    const [inpEmailValue, setInputEmailValue] = useState('');
    const [inpPasswordValue, setInputPassValue] = useState('');
    const [rememberMe, setRemMe] = useState(false);

    const getAuth = useResFetching(async (login, password) => {
        const authPair = { password: password, email: login };

        try {
            const response = await PostService.getAuthResult(authPair);

            if (response.status === 200) {
                return true;
            } else {
                dispatch(setError("Неверное имя пользователя или пароль!"));
                return false;
            }
        } catch (error) {
            dispatch(setError("Ошибка при выполнении запроса!"));
            return false;
        }
    });



    const login = async event => {
        event.preventDefault();

        const authResult = await getAuth(inpEmailValue, inpPasswordValue);

        if (authResult) {
            if (errorState) {
                dispatch(solveError())
            }

            dispatch(setUserKey({'email': inpEmailValue, 'password': inpPasswordValue}));


            if (rememberMe) {
                localStorage.setItem('auth', 'true')
            }

            dispatch(setLogin());

        } else {
            dispatch(setError("Неверное имя пользователя или пароль!"))
            if (errorState) {
                alert(errorMessage)
            }
        }
    }

    const handleInputEmailChange = (e) => {
        setInputEmailValue(e.target.value);
    };

    const handleInputPassChange = (e) => {
        setInputPassValue(e.target.value);
    };
    const handleRememberChange = (e) => {
        setRemMe(!rememberMe);
    };

    return (
        <Card className="w-96 flex">
            <CardHeader
                variant="gradient"
                className="mb-4 grid h-28 place-items-center bg-mainColor"
            >
                <Typography variant="h3" color="white">
                    Добро пожаловать!
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Input label="Email" size="lg" value={inpEmailValue} onChange={handleInputEmailChange}/>
                <Input type="password" label="Пароль" size="lg" value={inpPasswordValue} onChange={handleInputPassChange}/>
                <div className="-ml-2.5">
                    <Checkbox label="Запомнить меня" onChange={handleRememberChange}/>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="color" fullWidth className="bg-mainColor" onClick={login}>
                    Войти
                </Button>
                {/*<Typography variant="small" className="mt-6 flex justify-center">*/}
                {/*    Don&apos;t have an account?*/}
                {/*    <Typography*/}
                {/*        as="a"*/}
                {/*        href="#signup"*/}
                {/*        variant="small"*/}
                {/*        color="blue-gray"*/}
                {/*        className="ml-1 font-bold"*/}
                {/*    >*/}
                {/*        Sign up*/}
                {/*    </Typography>*/}
                {/*</Typography>*/}
            </CardFooter>
        </Card>
    );
}