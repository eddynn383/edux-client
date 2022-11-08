import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useGetCoursesQuery } from "../../services/Courses/coursesApiSlice"

import TableRow from "../../components/TableRow"
import TableCell from "../../components/TableCell"
import Cover from "../../components/Cover"
import Button from "../../components/Button"
import Icon from "../../components/Icon"
import Checkbox from "../../components/Checkbox"

const CourseListItem = ({courseId}) => {
    // const [checkboxStatus, setCheckboxStatus] = useState(selected)
    const navigate = useNavigate()


    const { course } = useGetCoursesQuery('coursesList', {
        selectFromResult: ({ data }) => ({
            course: data?.entities[courseId]
        })
    })

    // useEffect(() => {
    //     console.log(selected)
    // }, [selected])
    
    if(course) {
        
        // console.log(course)
        const created = new Date(course.createdAt).toLocaleString('en-GB')
        const updated = new Date(course.updatedAt).toLocaleString('en-GB')

        const handleEdit = () => navigate(`${courseId}`)


        // const checkboxChangeHandler = () => {
        //     setCheckboxStatus('checked')
        // }

        // const checkboxHandler = (e) => {
        //     if (checkboxStatus === 'unchecked') {
        //         setCheckboxStatus('checked')
        //     } else {
        //         setCheckboxStatus('unchecked')
        //     }
        // }
        


        return (
            <TableRow>
                {/* <TableCell style={{'width': '8%'}}><Checkbox cn="select-item" type="checkbox" value={checked} onChange={handleChange} /></TableCell> */}
                <TableCell style={{'width': '8%'}}><Cover url={course.cover['url']} alt="Course Cover" type="square" /></TableCell>
                <TableCell style={{'width': '30%'}}>{course.title}</TableCell>
                <TableCell style={{'width': '10%'}}>{course.courseID}</TableCell>
                <TableCell style={{'width': '12%'}}>{course.chapters}</TableCell>
                <TableCell style={{'width': '17%'}}>{created}</TableCell>
                <TableCell style={{'width': '17%'}}>{updated}</TableCell>
                <TableCell style={{'width': '6%', 'justifyContent': 'flex-end'}}><Button size="small" variant="icon"><Icon value="faEllipsisVertical" /></Button></TableCell>
            </TableRow>
        )
    } else return null

}

export default CourseListItem
