import { useEffect } from 'react'
import useNav from '../hooks/useNavigation'
import Menu from "../components/Menu"

const Courses = () => {
    const { setTitle } = useNav()
    const attrs = {
        menu: {
            cn: ['secondary']
        }
    }

    useEffect(() => {
        setTitle('Courses')
    }, [])
    return (
        <div>
            {/* <Navigation {...attrs.navigation} /> */}
        </div>
    )
}

export default Courses
