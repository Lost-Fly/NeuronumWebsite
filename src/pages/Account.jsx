
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button, CardFooter,
} from "@material-tailwind/react";
import React, {useState} from 'react';

import ComplexNavbar from "../components/UI/Navbar/TailwindNavbar";

const Account = () => {

    const [firstName, setFirstName] = useState('Clinica');
    const [lastName, setLastName] = useState('Familia');
    const [email, setEmail] = useState('info2989000@gmail.com');
    const [organisation, setOrganisation] = useState('Clinica Familia');

    return (
        <div>
            <ComplexNavbar/>
            <div className="mt-10 ml-5 mr-5 place-content-center flex">
                <Card className="w-96">
                    <CardHeader floated={false} className="max-h-32 flex place-content-center">
                        <img src="https://cdn1.flamp.ru/dd76466f8c11342c0a1c2248038466b3.jpg" alt="profile-picture" className="max-h-32"/>
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Информация о пользователе:
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            <ul>
                                <li>Имя: {firstName}</li>
                                <li>Фамилия: {lastName}</li>
                                <li>Email: {email}</li>
                                <li>Организация: {organisation}</li>
                            </ul>
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            <Button variant="color" fullWidth className="bg-mainColor">
                                Редактировать
                            </Button>
                        </Typography>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}



export default Account;