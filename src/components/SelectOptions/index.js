const SelectOptions = ({options, selectOption, setIsOpen}) => {
    const clickHandle = (e, option) => {
        e.stopPropagation()
        selectOption(option)
        setIsOpen(false)
    }

    return (
        <ul className="options">
            {options.map((option, i) => (
                <li 
                    key={i} 
                    onClick={clickHandle(option)} 
                    // onMouseEnter={() => setHighlightedIndex(i)} 
                    className="option"
                >
                    {option.label}
                </li>
            ))}
        </ul>
    )
}

export default SelectOptions
