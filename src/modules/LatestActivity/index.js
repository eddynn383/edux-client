import Title from '../../components/Title'
import Cover from '../../components/Cover'
import Card from '../../components/Card'
import './style.scss'

import { data } from '../../config/lastCourses'
import { Link } from 'react-router-dom'



const LatestActivity = () => {
    return (
        <div className="section latest-activity">
            <Title cn="latest-activity_title" type="section">Continue with</Title>
            <div className="latest-activity_content">
                {
                    data.map((item, idx) => {
                        const top = (
                            <div className="details">
                                <div className="details_left">
                                    <Cover url={item.cover} alt={item.title} size="medium" type="square"/>
                                </div>
                                <div className="details_right">
                                    <h3 className="title">
                                        <span className="title_text">{item.title}</span>
                                    </h3>
                                    <span className="tutor">{item.tutor}</span>
                                </div>
                            </div>
                        )
                    
                        const bottom = (
                            <div className="progress">
                                <div className="progress_label" >
                                    <span className="label_chapter">Chapter {item.lastChapter}</span>
                                    <span className="label_progress">{item.overallProgress}%</span>
                                </div>
                                <div className="progress_bar">
                                    <span className='bar_value' style={{width: `${item.overallProgress}%`}}><span className="sr-only">{item.overallProgress}</span></span>
                                </div>
                            </div>
                        )

                        if(idx < 3) return (
                            <Card cn="card--in-progress" size="large" contentTop={top} contentBottom={bottom} key={idx} />
                        )
                        return null;
                    })
                }
            </div>
            <Link to="/">Show more</Link>
        </div>       
    )
}

export default LatestActivity
