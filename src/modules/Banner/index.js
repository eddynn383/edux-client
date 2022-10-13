import Title from "../../components/Title"
import './style.scss'

const Banner = ({cn, title, user, height, coverURL}) => {
    return (
        <div className={`module banner ${cn}`}>
            <div className="banner_outer" style={{height: `${height}px`}}>
                <div className="banner_inner" style={{backgroundImage: `url(${coverURL})`}}>
                    <Title cn="banner_title" type="section">
                        <span className="title_greeting">{title}</span>
                        <span className="title_user">{user}</span>
                    </Title>
                </div>
            </div>
        </div>
    )
}

export default Banner
