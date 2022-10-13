import NoLink from '../MenuNoLink'
import MenuItem from '../MenuItem';

const MenuDropdown = ({items, parent, show, setShow, depthLevel}) => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? " dropdown-submenu" : ""
    return (
        <ul className={`dropdown${dropdownClass} ${show ? "show" : ""}`}>
            <NoLink cn="back-to" title={parent} iconBefore="faChevronLeft" text={parent} onClick={() => setShow(false)} />
            {
                items.map((item, i) => (
                    <MenuItem item={item} key={i} depthLevel={depthLevel} />
                ))
            }
        </ul>
    )
}

export default MenuDropdown
