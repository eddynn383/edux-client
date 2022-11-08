import { useEffect } from 'react'
import { useGetCoursesQuery } from '../services/Courses/coursesApiSlice'

// Hooks
import useAuth from '../hooks/useAuth'
import useNav from '../hooks/useNavigation'

// Modules
import CourseCards from '../modules/CourseCards'

// Components
import Icon from '../components/Icon'

// Style
import '../assets/design/catalog.scss'
import Toolbar from '../modules/Toolbar'

const Catalog = () => {

    const { email, isTutor, isAdmin } = useAuth()
    const { setTitle } = useNav()

    const {
        data: courses,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCoursesQuery('coursesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = (
        <div className="module module--loading">
            <Icon cn={["spinner"]} iconClass="fa-spin" value="faCompactDisc" />
        </div>
    )

    if (isError) content = <p className="errmsg">{error?.data?.message}</p>

    if (isSuccess) {
        const { ids, entities } = courses

        // let filteredIds
        // if (isTutor || isAdmin) {
        //     filteredIds = [...ids]
        // } else {
        //     filteredIds = ids.filter(courseId => entities[courseId].email === email)
        // }

        const listContent = ids?.length && ids.map((courseId, idx) => <CourseCards key={idx} courseId={courseId} />)

        content = (
            <>
                <div className="body_top">
                    <Toolbar cn="module toolbar"/>
                </div>
                <div className="body_content">
                    <div className="body_left">
                        <div className="module cards" type="card">
                            {listContent}
                        </div>
                    </div>
                    <div className="body_right">
                        
                    </div>
                </div>
                <div className="body_bottom">
                </div>
            </>
        )
    }

    useEffect(() => {
        setTitle('Catalog')
    }, [])

    return content
}

export default Catalog



