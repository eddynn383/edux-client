import { Outlet } from "react-router-dom"
import Panel from '../../components/Panel'

import './style.scss'

const GlobalBody = () => {
    return (
        <Panel cn="body">
            <Panel cn="body_inner">
                <Outlet />
            </Panel>
        </Panel>
    )
}

export default GlobalBody
