import Info from '../Info';
import Panel from '../../components/Panel';
import Title from '../../components/Title';

import useNav from "../../hooks/useNavigation";

import './style.scss'

const GlobalHeader = () => {

    const { title } = useNav()

    return (
        <Panel cn="header">
            <Panel cn="header_inner">
                <Title cn="page-title" type="page">{title}</Title>
                <Info />
            </Panel>
        </Panel>
    )
}

export default GlobalHeader
