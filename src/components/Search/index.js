import Label from '../Label'
import Input from '../Input'
import Icon from '../Icon'

import './style.scss'

const Search = ({cn, id, value, size="medium", variant="outline", style, innerRef, onChange}) => {
    const props = {
        input: {
            name: 'search',
            variant,
            hideLabel: true,
            iconAfter: <Icon value={'faMagnifyingGlass'} cn={['icon--after icon--clear']} />,
            placeholder: 'Search...',
            required: true,
            innerRef,
            style,
            value,
            onChange
        }
    }

    return (
        <div className={cn ? `${'component search'} ${cn}` : `${'component serach'}`} id={id} variant={variant} xsize={size} >
            <Label cn="label--search" htmlFor={'search'} hide={true}>Search</Label>
            <Input cn="input--search" id={'search'} type="text" size={size} {...props.input}/>
        </div>
    ) 
}

export default Search
