const DropdownItem = ({item}) => {

    return (
        <option className={item.children ? 'has-children' : ''}>{item}</option>
    )
}

export default DropdownItem
