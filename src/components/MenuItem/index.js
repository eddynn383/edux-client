import { useState } from 'react'
import Link from '../MenuLink'
import NoLink from '../MenuNoLink'
import MenuDropdown from '../MenuDropdown'

const MenuItem = ({item, depthLevel}) => {
    const [show, setShow] = useState(false)
    
    console.log(show)

    return (
        <li className={`${item.children ? 'has-children' : ''} ${item.children ? show ? 'open' : 'close' : ''}`}>
            {
                item.children ? (
                    <>
                        <NoLink cn={item.class} title={item.title} iconBefore={item.icon} text={item.title} iconAfter="faChevronRight" onClick={() => setShow(false)} />
                        {show && <MenuDropdown items={item.children} parent={item.title} setShow={setShow} depthLevel={depthLevel} />}
                    </>
                ) : (
                    <Link to={item.link} cn={item.class} title={item.title} iconBefore={item.icon} text={item.title} />
                )
            }
            
        </li>
    )
}

export default MenuItem
