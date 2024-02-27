import React from 'react';
import Navbar from "../../components/UI/Navbar/LvmNavbar";
// import "./DashBoards.css";
import LvmSidebar from "../../components/LvmSidebar";
import StatusCard from "../../components/StatusCard";

// import '../../assets/styles/tailwind.css';

import ChartBar from "../../components/ChartBar";
import ChartLine from "../../components/ChartLine";
import TrafficCard from "../../components/TrafficCard";
import PageVisitsCard from "../../components/PageVisitsCard";
import ComplexNavbar from "../../components/UI/Navbar/TailwindNavbar";

import {
    BellAlertIcon, Cog6ToothIcon, CogIcon, HomeIcon, PlusIcon
} from "@heroicons/react/20/solid";
import PieChart from "../../components/PieChart";
import {IconButton, SpeedDial, SpeedDialAction, SpeedDialContent, SpeedDialHandler} from "@material-tailwind/react";
import {Square3Stack3DIcon} from "@heroicons/react/24/outline";

const DashBoards = () => {


    return (
        <div>

            <ComplexNavbar/>

            <div className="mt-2 ">


                <div className="px-3 md:px-4 mb-5 mt-5 rounded-md border-2 bg-white mr-2 ml-2">
                    <div className="container mx-auto max-w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-5">
                            <StatusCard
                                color="pink"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                </svg>
                                }
                                title="Жалобы"
                                amount="127"
                                percentage="1.48%"
                                percentageIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                            </svg>}

                            percentageColor="red"
                                date="По сравнению с прошлым месяцем"
                            />
                            <StatusCard
                                color="orange"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>}
                                title="Новые клиенты"
                                amount="2,356"
                                percentage="3.48%"
                                percentageIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>}
                                percentageColor="green"
                                date="По сравнению с прошлым месяцем"
                            />
                            <StatusCard
                                color="blue"
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                }
                                title="Новые записи"
                                amount="234"
                                percentage="12%"
                                percentageIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                                </svg>}
                                percentageColor="green"
                                date="По сравнению с прошлым днём"
                            />
                            <div className="flex mt-8 mb-12">
                                <SpeedDial placement="bottom">
                                    <SpeedDialHandler>
                                        <IconButton size="lg" className="rounded-full bg-mainColor mb-14">
                                            <PlusIcon className="h-5 w-5" />
                                        </IconButton>
                                    </SpeedDialHandler>
                                    <SpeedDialContent className="max-h-fit">
                                        <SpeedDialAction>
                                            <PlusIcon className="h-5 w-5" />
                                        </SpeedDialAction>
                                        <SpeedDialAction>
                                            <Cog6ToothIcon className="h-5 w-5" />
                                        </SpeedDialAction>
                                    </SpeedDialContent>
                                </SpeedDial>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="px-3 md:px-0 h-auto rounded-md border-2 bg-white mr-2 ml-2">
                    <div className="container mx-auto max-w-full pt-12">
                        <div className="grid grid-cols-1 xl:grid-cols-5">
                            {/*<div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">*/}
                            {/*    <PageVisitsCard />*/}
                            {/*</div>*/}

                            <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
                                <TrafficCard/>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="px-3 ml-3 mt-10 rounded-md border-2 bg-white mr-2 mb-10">
                    <div className="container mx-auto max-w-full pt-12 -pb-2">
                        <div className="grid grid-cols-1 xl:grid-cols-5">
                            <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                                <ChartBar />
                            </div>
                            <div className="xl:col-start-3 xl:col-end-5 px-4 mb-14">
                                <ChartLine />
                            </div>
                            <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                                <PieChart />
                            </div>
                            <div className="xl:col-start-3 xl:col-end-4 px-4 mb-14">
                                <div className="flex">
                                    <SpeedDial placement="bottom">
                                        <SpeedDialHandler>
                                            <IconButton size="lg" className="rounded-full bg-mainColor mb-14">
                                                <PlusIcon className="h-5 w-5" />
                                            </IconButton>
                                        </SpeedDialHandler>
                                        <SpeedDialContent>
                                            <SpeedDialAction>
                                                <PlusIcon className="h-5 w-5" />
                                            </SpeedDialAction>
                                            <SpeedDialAction>
                                                <Cog6ToothIcon className="h-5 w-5" />
                                            </SpeedDialAction>
                                        </SpeedDialContent>
                                    </SpeedDial>
                                </div>
                            </div>
                            {/*<div className="xl:col-start-4 xl:col-end-5 px-4 mb-14">*/}
                            {/*    <ChartBar />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default DashBoards;