import { NextPage } from "next";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { LiaTimesSolid } from "react-icons/lia";
import { IoMoveOutline } from "react-icons/io5";

import styles from './testing.module.scss'
ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.font.size = 12;

interface DoughnutChartProps {
    chartData: {
        head: string,
        subhead: string,
        labels: string[];
        backgroundColor: string[],
        borderColor: string[],
        datasetLabel: string;
        data: number[];
        innerText: string[];
    };
}

const DoughnutChart: NextPage<DoughnutChartProps> = ({ chartData }) => {
    const data = {
        labels: chartData.labels,
        datasets: [{
            label: chartData.datasetLabel,
            data: chartData.data,
            backgroundColor: chartData.backgroundColor,
            borderColor: chartData.borderColor,
            hoverOffset: 4
        }]
    };

    const options = {
        cutout: "80%",
        radius:"85%",
        plugins: {
            legend: {
                display: false,
                position: "bottom" as const,
                align: 'center',
                padding: -10,
                labels: {
                    usePointStyle: false,
                    pointStyle: 'circle',
                    borderRadius: 10,
                    boxWidth: 5,
                    boxHeight: 5,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.hovericons}>
                        <IoMoveOutline />
                        <LiaTimesSolid />
                    </div>
            <div className={styles.DnChartTop}>
                <div className={styles.DnChartHead}>{chartData.head}</div>
            </div>
            <Doughnut data={data} options={options}></Doughnut>
            <div className={styles.TextBox}>
            <div className={styles.innertext}>
                <div className={styles.Dnvalue}>{chartData.innerText[0]}</div>
                <div className={styles.Dnsubvalue}>{chartData.innerText[1]}</div>
            </div>
            </div>
        </div>
    );
};

export default DoughnutChart;
