import { useState, useEffect } from 'react';
import './style.scss'

const Input = ({cn, id, name, type, innerRef, size="medium", variant="outline", placeholder, value, autoComplete, iconBefore, iconAfter, ariaInvalid, ariaDescribedBy, status, focus, style, onClick, onChange, onFocus, onBlur }) => {
    const [inputType, setInputType] = useState(type)

    const innerProps = {
        name,
        id,
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

    return (
        <div className={cn ? `${'component input'} ${cn}` : `${'component input'}`} id={id} variant={variant} xicon={iconBefore && iconAfter ? 'both' : iconBefore ? 'before' : iconAfter ? 'after' : null } xsize={size} data-focus={focus} data-status={status} style={style} >
            {iconBefore}
            {
                <input {...innerProps} type={inputType} aria-invalid={ariaInvalid} aria-describedby={ariaDescribedBy} />
            }
            {iconAfter}
        </div>
    )
}

export default Input    