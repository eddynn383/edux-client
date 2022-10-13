import { useSelector } from "react-redux"
import { selectCurrentToken } from "../services/Auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isTutor = false
    let isAdmin = false
    let status = "Learner"

    if (token) {
        const decoded = jwtDecode(token)
        const { avatar, firstname, lastname, email, roles } = decoded.UserInfo

        isTutor = roles.includes('Tutor')
        isAdmin = roles.includes('Admin')

        if (isTutor) status = "Tutor"
        if (isAdmin) status = "Admin"

        return { avatar, firstname, lastname, email, roles, status, isTutor, isAdmin }
    }

    return { email: '', roles: [], isTutor, isAdmin, status }

}

export default useAuth;