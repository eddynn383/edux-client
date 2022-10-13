import Label from '../Label';
import Text from '../Text';
import Icon from '../Icon';
import sx from './component.module.scss';

const Checkbox = ({cn, id, label, checkmark, type, checked, onClick}) => {

    return (
        <div className={cn ? `${sx.checkbox} ${cn}` : `${sx.checkbox}`}>
            <Label cn={sx['checkbox-label']} htmlFor={id}>
                <input className={sx['checkbox-input']} id={id} type={type} checked={checked} onClick={onClick} />
                <span className={sx['checkbox-marker']}>{checkmark ? checkmark : <Icon cn={sx['checkbox-marker-icon']} value='faCheck'/>}</span>
                <Text cn={sx['checkbox-text']} inline={true}>{label}</Text>
            </Label>
        </div>
    )
}

export default Checkbox