import { useEffect, useState } from 'react';
import MenuItem from '../MenuItem';
import { addClass, classModifier } from '../../functions/utils'
import { data as menuItems } from '../../config/navigation'
import './style.scss'

const Menu = ({cn}) => {

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
}

export default Menu