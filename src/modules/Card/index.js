import Cover from '../../components/Cover'
import style from './card.module.scss'

const Card = ({ data, size="medium" }) => {
    return (
        <div className={style.container} card-size={size} >
            <div className={style.top}>
                <Cover cn={['test']} url={data.cover} alt={data.title} size="medium" type="square"/>
                <div className={style.details}>
                    <h3 className={style["details_title"]}>
                        <span className={style["title_text"]}>{data.title}</span>
                    </h3>
                    <span className={style["details_tutor"]}>{data.tutor}</span>
                </div>
            </div>
            <div className="card_bottom">
                <div className={style.progress}>
                    <div className={style.label} >
                        <span className={style.chapter}>Chapter {data.lastChapter}</span>
                        <span className={style.progress}>{data.overallProgress}%</span>
                    </div>
                    <div className={style.bar}>
                        <span className={style.value} style={{width: `${data.overallProgress}%`}}><span className="sr-only">{data.overallProgress}</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
