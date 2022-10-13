import { useState, useEffect } from 'react';
// import { addClass, classModifier } from '../../functions/utils';
import Label from '../Label';
import './style.scss';

const Input = ({ innerRef, name, type, size="medium", variant="outline", placeholder, cn, id, label, value, hideLabel=false, autoComplete, iconBefore, iconAfter, ariaInvalid, ariaDescribedBy, status, focus, style, onClick, onChange, onFocus, onBlur }) => {
    const [inputType, setInputType] = useState(type)

    const innerProps = {
        name,
        id,
        type,
        size,
        placeholder,
        value,
        autoComplete,
        ref: innerRef,
        onClick,
        onChange,
        onFocus,
        onBlur
    }

    useEffect(() => {
        setInputType(type)
    }, [type])

    if(iconBefore) cn = [...cn, 'hasIconBefore']
    if(iconAfter) cn = [...cn, 'hasIconAfter']

    return (
        <div className={`input input--${name} ${iconBefore ? 'input--iconBefore' : ''} ${iconAfter ? 'input--iconAfter': ''}`} input-size={size} data-focus={focus} data-status={status} style={style} >
            {label && <Label htmlFor={id} cn={`input_label ${hideLabel ? 'hide' : null}`}>{label}</Label>}
            <div className="input_inner" variant={variant}>
                {iconBefore}
                {
                    <input className="input_primitive" {...innerProps} type={inputType} aria-invalid={ariaInvalid} aria-describedby={ariaDescribedBy} />
                }
                {iconAfter}
            </div>
        </div>
    )
}

export default Input    