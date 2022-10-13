import Icon from '../Icon';
import { addClass, classModifier } from '../../functions/utils';
import './style.scss'


const RewardCard = ({cn, outerIcon, innerIcon, title, subtitle, value }) => {
    const attrs = {
        className: addClass(classModifier('reward-card', cn))
    }

    return (
        <div {...attrs}>
            <div className="reward-card_top">
                <Icon cn={["box"]} value={innerIcon} />
                <div className="reward-card_titles">
                    <h3 className="reward-card_title">{title}</h3>
                    <span className="reward-card_subtitle">{subtitle}</span>
                </div>
            </div>
            <div className="reward-card_middle">
                <span className="reward-card_value">{value}</span>
            </div>
            <div className="reward-card_bottom">
                <div className="reward-card_dropdown-header">
                    <span>Last year</span> 
                    <Icon cn={["dropdown"]} value="faChevronDown" />
                </div>
                <div className="reward-card_dropdown-body"></div>
            </div>
            <div className="reward-card_overlap-icon">
                <Icon cn={["overlap"]} value={outerIcon} />
            </div>
        </div>
    )
}

export default RewardCard
