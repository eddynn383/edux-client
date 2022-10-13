import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
    const { setCurrentUser } = useAuth()
    
    const refresh = async () => {
        const response = await axios.get('/account/refresh', {
            withCredentials: true
        })
        setCurrentUser(prev => {
            console.log(JSON.stringify(prev))
            console.log(response.data.accessToken)
            return { ...prev, accessToken: response.data.accessToken }
        })
        return response.data.accessToken
    }
    return refresh
}

export default useRefreshToken