import { useSelector } from 'react-redux'
import { selectCourseById } from '../../services/Courses/coursesApiSlice'

// Components
import Icon from '../../components/Icon';
import Rating from '../../components/Rating';

import './style.scss'
import Card from '../../components/Card';

const CourseCards = ({ courseId }) => {
    const course = useSelector(state => selectCourseById(state, courseId))
    if (course) {
        const top = (
            <>
                <div className="cover">
                    {/* <Checkbox cn={['checkbox']} type="checkbox" checkmark={<Icon cn={['faCheck']} value='faCheck'/>}/> */}
                    <img className="cover_img" src={course.cover.url} alt={course.title} />
                    {course.isBestseller && <span className="cover_flag">Bestseller</span>}
                </div>
                <div className="details">
                    <h3 className="details_title">
                        <span className="title_text">{course.title}</span>
                        {course.flag && <span className="title_flag">{course.flag}</span>}
                    </h3>
                    {course.rating && <Rating score={course.rating?.score} reviews={course.rating?.reviews}/>}
                    <p className="details_desc">{course.desc}</p>
                </div>
            </>
        )

        const bottom = (
            <>
                <div className="metatags">
                    {
                        course.tutor &&
                        <div className="tutor">
                            <img className="tutor_photo" src={course.tutor.photoURL} alt={course.tutor.name} />
                            <span className="tutor_text">{course.tutor.name}</span>
                        </div>
                    }
                    {
                        course.metatags?.map((metatag, idx) => 
                            <div className="metatag" key={idx}>
                                { metatag && <Icon cn={['metatag']} value={metatag.icon} /> }
                                <span className="metatag_text">{metatag.value}</span>
                            </div>
                        )
                    }
                </div>
                <button className="button button--reset">
                    <Icon cn={['metatag']} value={course.entrance === "Open" ? "faArrowRightLong" : course.entrance === "locked" ? "faLock" : "faCartShopping" } />
                </button>
            </>
        )

        return <Card cn="card--course" contentTop={top} contentBottom={bottom} />

    } else return null
}

export default CourseCards
