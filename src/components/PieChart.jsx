import React, {useEffect} from 'react';
import {Card, CardBody, CardHeader} from "@material-tailwind/react";
import {
    CategoryScale,
    Chart,
    LinearScale,
    LineController,
    LineElement,
    PointElement,
    registerables,
    Title
} from "chart.js";

const PieChart = () => {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'Данные',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const config = {
        type: 'pie',
        data: data,
    };

    useEffect(() => {

        Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
        Chart.register(...registerables);

        const ctx = document.getElementById('pie-chart').getContext('2d');
        window.myLine = new Chart(ctx, config);

    }, []);

    return (
        <Card>
            <CardHeader color="orange" contentPosition="left" className="p-2">
                <h2 className="text-white text-2xl">Данные</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="pie-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
};

export default PieChart;