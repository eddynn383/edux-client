import { forwardRef } from 'react'
import Label from '../Label'
import Input from '../Input'
import Icon from '../Icon'

import './style.scss'

const Search = forwardRef((props, ref) => {

    const {cn, id, value, size="medium", variant="outline", style, onChange} = props

    const attrs = {
        input: {
            name: 'search',
            variant,
            hideLabel: true,
            iconAfter: <Icon value={'faMagnifyingGlass'} cn={['icon--after icon--clear']} />,
            placeholder: 'Search...',
            required: true,
            innerRef: ref,
            style,
            value,
            onChange: (e) => {
                if (onChange) onChange(e.target.value, e);
            }
        }
    }

    return (
        <div className={cn ? `${'component search'} ${cn}` : `${'component serach'}`} id={id} variant={variant} xsize={size} >
            <Label cn="label--search" htmlFor={'search'} hide={true}>Search</Label>
            <Input cn="input--search" id={'search'} type="text" size={size} {...attrs.input}/>
        </div>
    ) 
}
)

export default Search
