import { useEffect, useState } from 'react';
import MenuItem from '../MenuItem';
import { addClass, classModifier } from '../../functions/utils'
import { data as menuItems } from '../../config/navigation'
import './style.scss'

const Menu = ({cn}) => {
    // const { nav } = useNav()
    // const links = nav

    // const [active, setActive] = useState(false)

    // let childrenList;

    useEffect(() => {
        console.log(active)
    }, [])

    let active = false

    const clickHandler = (e) => {
        console.log(active)
        e.isActive = active
        active = !active
        console.log(e)
    }

    // useEffect(() => {
    //     const childrenList = e?.map((elem, id) => 
    //         <li key={id}>
    //             <Link to={elem.link} title={elem.title} elemlasses={elem.class} iconBefore={elem.icon} text={elem.title} />
    //         </li>
    //     )
    // }, [childrenList])

    return (
        <nav className={addClass(classModifier('nav', cn))}>
            <ul className="level1">
                {
                    menuItems?.map((item, i) => {
                        const depthLevel = 0
                        return (
                            <MenuItem item={item} key={i} depthLevel={depthLevel} />
                        )
                    })
                }
            </ul>
        </nav>
    )

    // return (
    //     <nav className={addClass(classModifier('nav', cn))}>
    //         <ul className="level1">
    //             {
    //                 menuItems?.map((item, i) => {
    //                     return (
    //                         <li key={i} className={e.children ? 'has-children' : ''}>
    //                             {e.children ? <NoLink title={e.title} text={e.title} onClick={() => clickHandler(e, !active)} /> : <Link to={e.link} title={e.title} cn={e.class} iconBefore={e.icon} text={e.title} />}
    //                             {/* {childrenList} */}
    //                             {
    //                                 e.isActive && <ul className="level1">
    //                                 {
    //                                     e.children?.map((elem, id) => 
    //                                         <li key={id}>
    //                                             <Link to={elem.link} title={elem.title} elemlasses={elem.class} iconBefore={elem.icon} text={elem.title} />
    //                                         </li>
    //                                     )
    //                                 }
    //                                 </ul>
    //                             }
    //                         </li>
    //                     )
    //                 })
    //             }
    //         </ul>
    //     </nav>
    // )
}

export default Menu