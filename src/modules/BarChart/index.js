import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './style.scss'

ChartJS.register (
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

let delayed

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
    },
    layout: {
        padding: 0
    },
    elements: {
        bar: {
            borderRadius: 5,
            backgroundColor: "rgba(15, 15, 15, 0.5)",
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: true,
            },
            barPercentage: 0.1
        },
        y: {
            min: 0,
            max: 8,
            grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: true,
                drawTicks: true
            },
            // grace: '75%',
            ticks: {
                // forces step size to be 50 units
                stepSize: 2
            }
        },
    },
    animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
    }
};

const labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export const data = {
    labels,
    datasets: [{
        data: [{
            date: "05-Sept-2022",
            x: "Mo",
            y: 0.5
        }, {
            date: "06-Sept-2022",
            x: "Tu",
            y: 6
        }, {
            date: "07-Sept-2022",
            x: "We",
            y: 1
        }, {
            date: "08-Sept-2022",
            x: "Th",
            y: 2
        }, {
            date: "09-Sept-2022",
            x: "Fr",
            y: 2
        }, {
            date: "10-Sept-2022",
            x: "Sa",
            y: 0
        }, {
            date: "11-Sept-2022",
            x: "Su",
            y: 0
        }],
        borderWidth: 0,
        categoryPercentage: 0.1
    }]
};

const BarChart = ({cn}) => {
    return (
        <div className={cn ? `${'module bar-chart'} ${cn}` : `${'module bar-chart'}`}>
            <Bar options={options} data={data} />
        </div>
    )

}

export default BarChart