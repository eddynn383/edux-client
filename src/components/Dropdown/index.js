import DropdownItem from '../DropdownItem';

const Dropdown = ({items}) => {
    return (
        <select className={`dropdown`}>
            {
                items.map((item, i) => (
                    <DropdownItem item={item} key={i} />
                ))
            }
        </select>
    )
}

export default Dropdown
