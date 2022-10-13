import { addClass, classModifier } from '../../functions/utils';
import './style.scss';

const Logo = ({cn, url, alt, style}) => {
    const innerProps = {
        src: url,
        alt,
        style
    }
    
    return (
        <>
            <div className={addClass(classModifier('logo', cn))}>
                <img {...innerProps} />
            </div>
        </>
    )
}

export default Logo