import Text from '../Text'
import Icon from '../Icon'
import { addClass, classModifier } from '../../functions/utils'

import sx from './component.module.scss';

const MenuNoLink = ({cn, title, text, iconBefore, iconAfter, onClick, children}) => {

    return (
        <button className={cn ? `${sx['no-link']} ${cn}` : `${sx['no-link']}`} title={title} onClick={onClick}>
            {iconBefore && <Icon value={iconBefore} type="before" />}
            {text && <Text cn={['main']} inline={true}>{text}</Text>}
            {iconAfter && <Icon value={iconAfter } type="after" />}
            {children}
        </button>
    )
}

export default MenuNoLink