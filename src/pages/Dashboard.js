import { useEffect } from 'react'
import useNav from '../hooks/useNavigation'
import RewardCard from '../components/RewardCard'
import Title from '../components/Title'
import BarChart from '../modules/BarChart'
import Banner from '../modules/Banner'
import Card from '../modules/Card'
import bannerImage from '../assets/images/dashboard-banner.png'
import '../assets/design/dashboard.scss'

import { data } from '../config/lastCourses'

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
                        
                    </div>
                    <div className="row">
                        <div className="user-timeline">
                            <BarChart />
                            <div className="module"></div>
                        </div>
                    </div>

                    {/* <div className="module reward-cards"> 
                        <RewardCard cn={['achievements', 'primary']} title="Achievements" subtitle="Total" outervalue="faTrophy" innervalue="faCircleCheck" value="0"/>
                        <RewardCard cn={['skills', 'secondary']} title="Skills" subtitle="Total" innervalue="faBrain" outervalue="faBolt" value="0"/>
                        <RewardCard cn={['certifications', 'secondary']} title="Certifications" subtitle="Total" outervalue="faAward" innervalue="faListCheck" value="0"/>
                    </div> */}
                </div>
                <div className="body_right">

                </div>
            </div>
        </>
    )
}

export default Dashboard
