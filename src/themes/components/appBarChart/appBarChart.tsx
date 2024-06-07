import React from "react";
import { NextPage } from "next";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { LiaTimesSolid } from "react-icons/lia";
import { IoMoveOutline } from "react-icons/io5";

import styles from "./appBarChart.module.scss"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

ChartJS.defaults.font.size = 12;

interface BarChartProps {
    chartData: {
        head:string,
        subhead:string,
        labels: string[];
        datasetLabel: string;
        data: number[];
    }
}

const BarChart: NextPage<BarChartProps> = ({ chartData }) => {
    const data = {
        labels: chartData.labels,
        datasets: [{
            label: chartData.datasetLabel,
            data: chartData.data,
            backgroundColor: '#AF6C91',
            borderColor: '#984372',
            borderWidth: 1,
            borderRadius: 5
        }]
    };

    const options = {
        responsive: true,
        barPercentage: 5,
        categoryPercentage: 1,
        maxBarThickness: 30,
        aspectRatio: 1.1,
        plugins: {
            legend: {
                display: false
            }
        },
        indexAxis: "y",
        scales: {
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                border: {
                    display: false
                },
                grid: {
                    display: false,
                },
            },
            maintainAspectRatio: false,
        }
    }

    return (
        <div className={styles.barChart}>
            <div className={styles.hovericons}>
                <IoMoveOutline/>
                <LiaTimesSolid/>
            </div>
            <div className={styles.barChartTop}>
                <div className={styles.barChartHead}>{chartData.head}</div>
                <div className={styles.barChartsubHead}>{chartData.subhead}</div>
            </div>
            <Bar data={data} options={options}></Bar>
        </div>

    );
};

export default BarChart;

