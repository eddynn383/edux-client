import Text from '../Text';
import Icon from '../Icon';
import { Link, useMatch, useResolvedPath, } from 'react-router-dom';
import { addActive, addClass, classModifier } from '../../functions/utils';

import './style.scss';

const NavLink = ({to, cn, title, iconBefore, text, iconAfter, children}) => {
    const resolved = useResolvedPath(to)
    const match = useMatch({ path: resolved.pathname, end: true })
    const newcn = classModifier('link', cn)
    const withActive = addActive(newcn, 'active', match)

    return (
        <Link to={to} title={title} className={addClass(withActive)} >
            {iconBefore && <Icon value={iconBefore} type="before" />}
            {text && <Text cn={['main']} inline={true}>{text}</Text>}
            {iconAfter && <Icon value={iconAfter } type="after" />}
            {children}
        </Link>
    )
}

export default NavLink