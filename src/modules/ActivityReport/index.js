import Title from "../../components/Title"
import Select from '../../components/Select/'

import BarChart from "../BarChart"
import DailyReward from "../DailyReward"

import { orderType as orderTypeData } from '../../config/select'

import "./style.scss"

const ActivityReport = () => {
    return (
        <div className="section activity-report">
            <div className="activity-report_top">
                <div className="activity-report_left">
                    <Title cn="activity-report_title" type="section">11h 30m</Title>
                    <span className="activity-report_subtitle">Average spent time: 1.8h</span>
                </div>
                <div className="activity-report_right">
                    <Select placeholder={orderTypeData[0].label} options={orderTypeData} onChange={(value) => console.log(value)} />
                </div>
            </div>
            <div className="activity-report_bottom">
                <BarChart />
                <DailyReward />
            </div>
        </div>
    )
}

export default ActivityReport
