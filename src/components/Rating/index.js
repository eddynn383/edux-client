import RatingStar from '../RatingStar'
import './style.scss'

const Rating = ({score, reviews}) => {
    return (
        <div className={'rating'}>
            <span className={'rating-container'}>
                {
                    [...Array(5)].map((item, idx) => {
                        const i = idx + 1
                        return (
                            <RatingStar key={idx} idx={Number(i)} value={Number(score)}/>
                        )
                    })
                }
            </span>
            <span className={'rating-score'}>{score}</span>
            <span className={'rating-reviews'}>({reviews})</span>
        </div>
    )
}

export default Rating
