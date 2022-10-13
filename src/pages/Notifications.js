import { useEffect } from 'react'
import useNav from '../hooks/useNavigation'

const Notifications = () => {
    const { setTitle } = useNav()

    useEffect(() => {
        setTitle('Notifications')
    }, [])

    return (
        <div>
            <p>This is a Notifications page</p>
        </div>
    )
}

export default Notifications
