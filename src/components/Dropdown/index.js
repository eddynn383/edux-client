import DropdownItem from '../DropdownItem';

const Dropdown = ({items}) => {
    return (
        <select className={`component dropdown`}>
            {
                items.map((item, i) => (
                    <DropdownItem item={item} key={i} />
                ))
            }
        </select>
    )
}

export default Dropdown
