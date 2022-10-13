import {createContext, useState, useEffect} from "react"

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [isAuth, setIsAuth] = useState(false)
    const [roles, setRoles] = useState()

    const value = {
        currentUser, 
        setCurrentUser,
        isAuth,
        setIsAuth,
        roles,
        setRoles
    }

    useEffect(() => {
        if(currentUser) return console.log(currentUser)
    }, [currentUser])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext