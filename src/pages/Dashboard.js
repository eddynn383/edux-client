import { useEffect } from 'react'
import useNav from '../hooks/useNavigation'
import Banner from '../modules/Banner'
import LatestActivity from '../modules/LatestActivity'
import ActivityReport from '../modules/ActivityReport'
import LearningStatus from '../modules/LearningStatus'
import bannerImage from '../assets/images/dashboard-banner.png'
import '../assets/design/dashboard.scss'

const Dashboard = () => {
    const { setTitle } = useNav()

    useEffect(() => {
        setTitle('Dashboard')
    }, [])

    return (
        <>        
            <div className="body_content" id="dashboard">
                <div className="body_left">
                    <div className="row">
                        <Banner cn="module--no-padding" title="Welcome back," user="Eduard Boboc" height={180} coverURL={bannerImage}/>
                    </div>
                    <div className="row">
                        <LatestActivity />
                    </div>
                    <div className="row">
                        <ActivityReport />
                    </div>
                </div>
                <div className="body_right">
                    <LearningStatus />
                </div>
            </div>
        </>
    )
}

export default Dashboard