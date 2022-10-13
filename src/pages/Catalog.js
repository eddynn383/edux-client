import { useEffect } from 'react'
import { useGetCoursesQuery } from '../services/Courses/coursesApiSlice'

// Hooks
import useAuth from '../hooks/useAuth'
import useNav from '../hooks/useNavigation'

// Modules
import Course from '../modules/Course'

// Components
import Icon from '../components/Icon'

// Style
import '../assets/design/catalog.scss'
import Toolbar from '../modules/Toolbar'

// MUI
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

// import Link from '../components/Link';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy', action: () => console.log('File Copy') },
    { icon: <SaveIcon />, name: 'Save', action: () => console.log('File Save') },
    { icon: <PrintIcon />, name: 'Print', action: () => console.log('File Print') },
    { icon: <ShareIcon />, name: 'Share', action: () => console.log('File Share') },
];

const Catalog = () => {

    const { email, isTutor, isAdmin } = useAuth()
    const { setTitle } = useNav()

    useEffect(() => {
        setTitle('Catalog')
    }, [])

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

        let filteredIds
        if (isTutor || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(courseId => entities[courseId].email === email)
        }

        const listContent = ids?.length && filteredIds.map((courseId, idx) => <Course key={idx} courseId={courseId}/>)

        // console.log(listContent)

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
                    <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={action.action}
                            />
                        ))}
                    </SpeedDial>
                </div>
            </>
        )
    }

    return content
}

export default Catalog



