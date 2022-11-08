import Card from "../../components/Card"
import Title from "../../components/Title"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement } from 'chart.js'


import './style.scss'

ChartJS.register(ArcElement)

export const data = {
    labels: ['Completed', 'In progress', 'Failed'],
    datasets: [
      {
        label: '# of Votes',
        data: [11, 5, 2],
        backgroundColor: [
          '#3EBD4B',
          '#EB981C',
          '#D92424'
        ],
        borderColor: [
          '#3EBD4B',
          '#EB981C',
          '#D92424'
        ],
        borderWidth: 1,
      },
    ],
};

const image = new Image();
image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

const plugin = {
    id: 'customCanvasBackgroundImage',
    legend: {
        display: false
    },
    beforeDraw: (chart) => {
        if (image.complete) {
            const ctx = chart.ctx;
            const {top, left, width, height} = chart.chartArea;
            const x = left + width / 2 - image.width / 2;
            const y = top + height / 2 - image.height / 2;
            ctx.drawImage(image, x, y);
        } else {
            image.onload = () => chart.draw();
        }
    }
};

const options = {
    plugins: plugin,
    elements: {
        arc: {
            borderWidth: 2
        }
    }
}

const LearningStatus = () => {
    const top = (
        <>
            <Title cn="learning-status_title" type="module">Learning status</Title>
            <span className="learning-status_subtitle">Promotion rate: 66.66%</span>
        </>
    )



    const bottom = (
        <>
            <div className="learning-status_total">
                <Doughnut data={data} options={options} />
                <span className="learning-status_total-value">18</span>
            </div>
            <div className="learning-status_legend">
                <div className="learning-status_legend-item" xtype="completed">
                    <span className="item_value">11</span>
                    <span className="item_label">Completed</span>
                </div>
                <div className="learning-status_legend-item" xtype="in-progress">
                    <span className="item_value">5</span>
                    <span className="item_label">In progress</span>
                </div>
                <div className="learning-status_legend-item" xtype="failed">
                    <span className="item_value">2</span>
                    <span className="item_label">Failed</span>
                </div>
            </div>
        </>
    )
    return <Card cn="learning-status" size="smmall" theme="light" contentTop={top} contentBottom={bottom} />
}

export default LearningStatus
