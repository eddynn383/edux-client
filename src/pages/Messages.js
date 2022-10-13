import { useEffect } from 'react'
import useNav from '../hooks/useNavigation'

const Messages = () => {

    const { setTitle } = useNav()

    useEffect(() => {
        setTitle('Messages')
    }, [])

    return (
        <div>
            <p>This is a messages page</p>
        </div>
    )
}

export default Messages
