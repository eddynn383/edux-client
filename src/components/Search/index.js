import { useState, useRef } from "react"
import Input from "../Input"
import Icon from "../Icon"

import './style.scss'

const Search = ({value, style, variant, innerRef, onChange}) => {
    const props = {
        search: {
            cn: ['search'],
            id: 'search',
            name: 'search',
            label: 'Search',
            size: 'small',
            variant,
            hideLabel: true,
            iconAfter: <Icon value={'faMagnifyingGlass'} cn={['after', 'clear']} />,
            placeholder: 'Search...',
            required: true,
            innerRef,
            style,
            value,
            onChange
        }
    }

    return (
        <Input {...props.search} type="text"/>
    ) 
}

export default Search
