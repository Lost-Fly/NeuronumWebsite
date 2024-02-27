import { useEffect } from 'react';

import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale , registerables } from 'chart.js'

import {
    Card,
    CardBody,
    CardHeader,
} from "@material-tailwind/react";


export default function ChartBar() {
    useEffect(() => {

        Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
        Chart.register(...registerables);

        let config = {
            type: 'bar',
            data: {
                labels: [
                    'Дания',
                    'Карина',
                    'Ольга',
                    'Ирина',
                    'Лариса',
                    'Алена',
                ],
                datasets: [
                    {
                        label: "Текущий месяц",
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [30, 78, 56, 34, 100, 45],
                        fill: false,
                        barThickness: 9,
                    },
                    {
                        label: "Прошлый месяц",
                        fill: false,
                        backgroundColor: '#f44336',
                        borderColor: '#f44336',
                        data: [27, 68, 86, 74, 10, 4],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(17,17,17,.7)',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Имена',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };

        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);

    }, []);

    return (
        <Card>
            <CardHeader color="pink" contentPosition="left" className="p-2">
                <h2 className="text-white text-2xl">Кол-во записей администатором</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
