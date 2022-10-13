import MenuLink from '../../components/MenuLink'
import Icon from '../../components/Icon'
import Badge from '../../components/Badge'
import './style.scss'

const Info = () => {
    return (
        <nav className="nav nav--info">
            <ul>
                <li>
                    <MenuLink to="/notifications" title="Notification" cn={['notification', 'icon', 'reset']}>
                        <Icon cn={['bell']} value="faBell" badge={<Badge cn={['messages']} max={99} value={150} size="small" type="info" />} />
                    </MenuLink>
                </li>
                <li>
                    <MenuLink to="/messages" title="Message" cn={['messages', 'icon', 'reset']} >
                        <Icon cn={['comment']} value="faComment" badge={<Badge cn={['messages']} maxValue={99} value={2} size="small" type="info" />} />
                    </MenuLink>
                </li>
            </ul>
        </nav>
    )
}

export default Info
