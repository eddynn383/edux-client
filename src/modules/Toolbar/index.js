import { useState, useEffect } from 'react'
import ButtonGroup from '../../components/ButtonGroup'
import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Search from '../../components/Search'
import Select from '../../components/Select/index.js'

import { orderDirection as orderDirectionData, orderType as orderTypeData } from '../../config/select'

import btn from '../../components/Button/component.module.scss'
import './style.scss'
import Dropdown from '../../components/Dropdown'

const Toolbar = ({cn, data}) => {
    const [view, setView] = useState("card")
    const [filterVisibility, setFilterVisibility] = useState(false)
    const [orderType, setOrderType] = useState([orderTypeData[0]])
    const [orderDirection, setOrderDirection] = useState([orderDirectionData[0]])

    return (
        <div className={cn}>
            <div className="toolbar_left">
                <ButtonGroup cn={btn["button-toggle"]} selected={view}>
                    <Button cn={btn["button--card"]} variant="icon" onClick={(e) => setView("card")}>
                        <Icon value="faGrip" />
                    </Button>
                    <Button cn={btn["button--list"]} variant="icon" onClick={(e) => setView("list")}>
                        <Icon value="faList" />
                    </Button>
                </ButtonGroup>
                <Search data={data} variant="filled" style={{minWidth: 400}}/>
            </div>
            <div className="toolbar_right">
                {/* <Select options={orderTypeData} value={orderType} onChange={o => setOrderType(o)} /> */}
                <Select placeholder={orderTypeData[0].label} options={orderTypeData} onChange={(value) => console.log(value)} />
                <Select placeholder={orderTypeData[0].label} options={orderDirectionData} onChange={(value) => console.log(value)} />
                {/* <Dropdown items={orderTypeData} /> */}
                <Button cn={["list"]} variant="icon" onClick={(e) => setFilterVisibility(prev => !prev)}><Icon value="faFilter" /></Button>
            </div>
        </div>
    )
}

export default Toolbar
