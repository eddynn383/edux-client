import MenuLink from '../../components/MenuLink'
import Icon from '../../components/Icon'
import Badge from '../../components/Badge'
import Cover from '../../components/Cover'

import useAuth from "../../hooks/useAuth"

import './style.scss'

const Info = () => {
    const { avatar } = useAuth()

    return (
        <nav className="nav nav--info">
            <ul>
                <li>
                    <MenuLink to="/notifications" title="Notification" cn={['notification', 'icon', 'reset']}>
                        <Icon cn={['bell']} value="faBell" badge={<Badge cn={['messages']} max={99} value={150} size="medium" type="info" />} />
                    </MenuLink>
                </li>
                <li>
                    <MenuLink to="/messages" title="Message" cn={['messages', 'icon', 'reset']} >
                        <Icon cn={['comment']} value="faComment" badge={<Badge cn={['messages']} maxValue={99} value={2} size="small" type="info" />} />
                    </MenuLink>
                </li>
                <li>
                    <Cover url={avatar} alt="Profile" cn="cover--profile" style={{maxWidth: "70px"}} />
                </li>
            </ul>
        </nav>
    )
}

export default Info
