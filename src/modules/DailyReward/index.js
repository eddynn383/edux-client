import Card from "../../components/Card"
import Cover from "../../components/Cover"
import Icon from "../../components/Icon"

import { data } from '../../config/dailyReward'
import './style.scss'

const DailyReward = ({cn}) => {
    return (
        <Card cn={`card--no-gap daily-reward ${cn}`} size="medium" type="module" >
            <div className="daily-reward_content">
                {
                    data.map((item, idx) => (
                        <div className="item" key={idx}>
                            <div className="item_left">
                                <Cover url={item.cover} alt={item.title} size="medium" type="square"/>
                            </div>
                            <div className="item_center">
                                <h3 className="title">
                                    <span className="title_text">{item.title}</span>
                                </h3>
                                <span className="timeline">
                                    <span className="timeline_start">{item.timeline.start}</span>    
                                    <span className="timeline_separator"> - </span>    
                                    <span className="timeline_end">{item.timeline.end}</span>    
                                </span>
                            </div>
                            <div className="item_right">
                                <span className="percentage success">
                                    <Icon cn="percentage_icon" value="faArrowTrendUp" type="solid" />
                                    <span className="percentage_value">{item.percentageValue}%</span>
                                </span>
                                <span className="points">
                                    <span className="points_simbol">+</span>
                                    <span className="points_value">{item.points}pts</span>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}

export default DailyReward
