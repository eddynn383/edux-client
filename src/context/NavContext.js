import {createContext, useState} from "react"

const NavContext = createContext({})

export const NavProvider = ({children}) => {
    const [nav, setNav] = useState({})
    const [title, setTitle] = useState()


    const value = {
        nav, 
        setNav,
        title,
        setTitle
    }

    return (
        <NavContext.Provider value={value}>
            {children}
        </NavContext.Provider>
    )

}

export default NavContext