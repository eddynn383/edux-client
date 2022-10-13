import { Outlet } from "react-router-dom"

import '../assets/design/_accessibility.scss'


const AccessibilityLayout = () => {
    return (
        <div className="layout layout--accessibility">
            <Outlet />
        </div>
    )
}

export default AccessibilityLayout