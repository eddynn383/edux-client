import { useState, useRef, useEffect } from 'react'
import Icon from '../Icon'

import style from './select.module.scss'
import Search from '../Search'

const Select = ({ placeholder, options, isMulti, isSearchable, onChange }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null)
    const [searchValue, setSearchValue] = useState("")
    const searchRef = useRef(null)

    useEffect(() => {
        setSearchValue('')
        if (isOpen && searchRef.current) {
            searchRef.current.focus()
        }
    }, [isOpen])    

    useEffect(() => {
        const handler = () => setIsOpen(false)

        window.addEventListener('click', handler)
        return () => {
            window.removeEventListener('click', handler)
        }
    })

    const handleInputClick = (e) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return placeholder
        }

        if (isMulti) {
            return (
                <div className={style.tags}>
                    {selectedValue.map((option) => (
                        <div key={option.value} className={style.tag}>
                            <span className={style["tag_text"]}>
                                {option.label}
                            </span>
                            <span onClick={(e) => onTagRemove(e, option)} className={style["tag_icon"]}>
                                <Icon cn={['close']} value="faXmark" />
                            </span>
                        </div>
                    ))}
                </div>
            )
        }
        return selectedValue.label;
    }

    const removeOption = (option) => {
        return selectedValue.filter((o) => o.value !== option.value)
    }

    const onTagRemove = (e, option) => {
        e.stopPropagation()
        const newValue = removeOption(option)
        setSelectedValue(newValue)
        onChange(newValue)
    }

    const onItemClick = (option) => {
        let newValue
        if (isMulti) {
            if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option)
            } else {
                newValue = [...selectedValue, option]
            }
        } else {
            newValue = option
        }
        setSelectedValue(newValue)
        onChange(newValue)
    }

    const isSelected = (option) => {
        if (isMulti) {
            return selectedValue.filter((o) => o.value === option.value).length > 0
        }

        if (!selectedValue) {
            return false
        }

        return selectedValue.value === option.value
    }

    const onSearch = (e) => {
        setSearchValue(e.target.value)
    }

    const getOptions = () => {
        if (!searchValue) {
            return options
        }

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
    }

    const cls = isOpen ? style.container + " " + style.open : style.container

    return (
        <div className={cls}>
            <div className={style.current} onClick={handleInputClick} >
                <div className={style["current_value"]}>{getDisplay()}</div>
                <div className={style["current_icon"]}>
                    <Icon cn={['arrow']} value={isOpen ? "faChevronUp" : "faChevronDown"}/>
                </div>
            </div>
            {isOpen && (
                <div className={style.dropdown}>
                    {isSearchable && (
                        <Search value={searchValue} innerRef={searchRef} onChange={onSearch} />
                    )}
                    <div className={style["dropdown_options"]}>
                        {getOptions().map((option) => (
                            <div onClick={() => onItemClick(option)} key={option.value} className={style["dropdown_option"]} >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Select
