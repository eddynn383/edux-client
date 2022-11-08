import Icon from '../Icon'
import './style.scss'

const RatingStar = ({value, idx}) => {
    const integerValue = parseInt(value)

    const getDecimalPart = (value) => {
        if (Number.isInteger(value)) {
            return 0
        }

        const decimals = value.toString().split('.')[1]
        return Number(decimals)
    }

    const progress = idx > value ? value > integerValue ? getDecimalPart(value) : 0 : 100

    return (
        <span className="component rating-star" data-progress={progress}>
            <label htmlFor="star">{idx + 1}</label>
            <input id="star" type="radio" defaultChecked={idx <= value ? true : false}/>
            <span className="rating-star_icon">
                <span className="rating-star_icon-fill" style={{width: `${progress}%`}}>
                    <Icon cn={['star fullfill']} value="faStar" />
                </span>
                <span className="rating-star_icon-base">
                    <Icon cn={['star base']} value="faStar" />
                </span>
            </span>
        </span>
    )
}

export default RatingStar
