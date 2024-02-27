import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import React from 'react';

import ComplexNavbar from "../components/UI/Navbar/TailwindNavbar";

const About = () => {
    return (
        <div>
            <ComplexNavbar/>
            <div className="mt-10 ml-5 mr-5 place-content-center flex">
                <Card className="w-full max-w-[60rem] flex-row">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-2/5 shrink-0 rounded-r-none"
                    >
                        <img
                            src="https://static6.tgstat.ru/channels/_0/b6/b610a2d05bd006b0df3d630ad2f2e279.jpg"
                            alt="card-image"
                            className="h-full w-full object-cover p-2"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase text-2xl">
                            Lvm Labs
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Передовые решения для бизнеса на основе ИИ
                        </Typography>
                        <Typography color="gray" className="mb-6 font-normal">
                            <h1 className="font-bold">Наши контакты:</h1>
                            <div className="mt-2">
                                <h2>Телефон: +7-912-653-63-77</h2>
                                <h2>Почта(Gmail): lvmlabs750@gmail.com</h2>
                                <h2>Почта(Yandex): lvmlabs@ya.ru</h2>
                                <h2>TG: @lvmlabs</h2>
                            </div>
                        </Typography>
                        <a href="#" className="inline-block -ml-5">
                            <Button variant="text" className="flex items-center gap-2">
                                Узнать больше
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}



export default About;