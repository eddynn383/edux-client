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
import CustomTable2 from '../../../components/CustomTable2'
import Cover from '../../../components/Cover'
import Search from '../../../components/Search'
import Pagination from '../../../modules/Pagination'

const Courses = () => {
    const { setTitle } = useNav()
    // const [isLoading, setIsLoading] = useState(true)
    // const [data, setData] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [entriesCount, setEntriesCount] = useState(0)
    const [search, setSearch] = useState('')


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
            accessor: "courseID",
            width: 70,
        }, {
            Header: "Image",
            accessor: 'cover.url',
            Cell: ImageCell,
            width: 70,
        }, {
            Header: "Title",
            accessor: "title",
            width: 70,
        },  {
            Header: "Chapters",
            accessor: "chapters",
            width: 70,
        }, {
            Header: "Last Update",
            accessor: "updatedAt",
            width: 70,
        }, {
            Header: "Created At",
            accessor: "createdAt",
            width: 70,
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
                        <Search value={search} onChange={(term) => {
                                setSearch(term || '')
                            }} 
                        />
                        <div className="module" type="card" style={{'maxHeight': '100%'}}>
                            <Card size="large" style={{'maxHeight': '100%', 'overflowY': 'auto bv'}}>
                                {/* <CustomTable columns={columns} data={coursesData} search={search} /> */}
                                <CustomTable2 cn="test" columns={columns} data={coursesData} search={search} />
                            </Card>
                        </div>
                        {/* <Pagination currentPage={pageIndex + 1} totalPages={pageOptions.length} onChange={(p) => {gotoPage(p - 1)}} /> */}
                    </div>
                </div>
            </>
        )
    }

    useEffect(() => {
        console.log(search)
    }, [search])

    useEffect(() => {
        setTitle('Courses')
    }, [])
    
    return content
}

export default Courses
