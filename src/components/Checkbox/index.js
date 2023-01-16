import { forwardRef, useRef, useEffect } from 'react'
import Label from '../Label'
import Text from '../Text'
import Icon from '../Icon'
import './style.scss'

const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    const {cn, id, value="unchecked", label, type, symbol, disabled, onChange} = rest 
    
    // useEffect(() => {
    //     resolvedRef.current.indeterminate = indeterminate
    // }, [resolvedRef, indeterminate])

    const checkboxSymbol = symbol ? symbol : <Icon cn={'checkbox-marker-icon'} value='faCheck'/>

    let checkboxStateSymbol = null

    switch (value) {
        case 'checked': checkboxStateSymbol = checkboxSymbol
            break;
        case 'intermediate' : checkboxStateSymbol = (<span className="border"></span>)
            break;
        default: checkboxStateSymbol = null
            break; 
    }

    return (
        <>
            <div className={cn ? `${'component checkbox'} ${cn}` : `${'component checkbox'}`}>
                <Label cn={'checkbox-label'} htmlFor={id}>
                    <input className={'checkbox-input'} id={id} type={type} disabled={disabled} ref={resolvedRef} checked={value !== 'unchecked'} value={value} onChange={(e) => {
                            if (!onChange) {
                                return;
                            }
                            if (value === 'intermediate') {
                                onChange('intermediate', e);
                            } else {
                                onChange(value === 'checked' ? 'unchecked' : 'checked', e);
                            }
                        }} 
                    />
                    <span className={'checkbox-marker'}>{checkboxStateSymbol}</span>
                    {label && <Text cn={'checkbox-text'} inline={true}>{label}</Text>}
                </Label>
            </div>
        </>
    )
})

export default Checkbox