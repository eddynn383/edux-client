import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useGetCoursesQuery, selectCourseById } from '../../../services/Courses/coursesApiSlice'

import {data} from '../../../config/fakeData'

// Hooks
import useAuth from '../../../hooks/useAuth'
import useNav from '../../../hooks/useNavigation'

// Modules
import CourseListItem from '../../../modules/CourseListItem'

// Components
import Icon from '../../../components/Icon'
import Table from '../../../components/Table'
import TableHead from '../../../components/TableHead'
import TableBody from '../../../components/TableBody'
import TableRow from '../../../components/TableRow'
import TableCell from '../../../components/TableCell'
import Card from '../../../components/Card'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import CustomTable from '../../../components/CustomTable'
import Cover from '../../../components/Cover'

const Courses = () => {
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

    const ImageCell = ({ value }) => (
        <Cover url={value} type="square" />
    )
    
    const columns = useMemo(() => [{
            Header: "ID",
            accessor: "courseID"
        }, {
            Header: "Image",
            accessor: 'cover.url',
            Cell: ImageCell
        }, {
            Header: "Title",
            accessor: "title"
        },  {
            Header: "Chapters",
            accessor: "chapters"
        }, {
            Header: "Last Update",
            accessor: "updatedAt"
        }, {
            Header: "Created At",
            accessor: "createdAt"
        }], []
    );
            
    let content
    let coursesIds
    let coursesData
            
    if (isLoading) content = (
        <div className="module module--loading">
            <Icon cn={["spinner"]} iconClass="fa-spin" value="faCompactDisc" />
        </div>
    )
    
    if (isError) content = <p className="errmsg">{error?.data?.message}</p>
    
    if (isSuccess) {
        coursesIds = courses.ids
        coursesData = coursesIds.map(courseId => courses?.entities[courseId])
        // console.log(coursesData)
        content = (
            <>
                <div className="body_content">
                    <div className="body_left">
                        <div className="module" type="card" style={{'maxHeight': '100%'}}>
                            <Card size="large" style={{'maxHeight': '100%', 'overflowY': 'auto'}}>
                                <CustomTable columns={columns} data={coursesData} />
                            </Card>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // useEffect(() => {
    //     console.log(courses)
    // }, [coursesData])

    useEffect(() => {
        setTitle('Courses')
    }, [])
    
    return content
}

export default Courses
