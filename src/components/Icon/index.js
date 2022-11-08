import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './style.scss'

const Icon = ({cn, value, type, iconClass, badge, style, onClick}) => {
    let iconComp

    switch (type) {
        case "regular": iconComp = <FontAwesomeIcon icon={far[value]} className={iconClass}/>
            break;
        case "brands": iconComp = <FontAwesomeIcon icon={fab[value]} className={iconClass}/>
            break;
        default: iconComp = <FontAwesomeIcon icon={fas[value]} className={iconClass}/>
            break;
    }
    return (
        <span className={cn ? `${'component icon'} ${cn}` : `${'component icon'}`} xtype={type} style={style} onClick={onClick}>
            {badge}
            {iconComp}
        </span>
    )
}

export default Icon
