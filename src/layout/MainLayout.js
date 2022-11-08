import GlobalHeader from '../modules/GlobalHeader'
import GlobalBody from '../modules/GlobalBody'
import Footer from '../modules/Footer'
import Profile from '../modules/Profile'
import Menu from '../components/Menu'
import Panel from '../components/Panel'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Text from '../components/Text'

import logoPath from '../assets/logo/logo-light.svg';

import '../assets/design/_main.scss'

const MainLayout = () => {

    const attrs = {
        logo: {
            cn: ['logo--main'],
            url: logoPath,
            alt: 'Placeholder Logo',
            style: {
                width: '140px'
            }
        },
        menu: {
            cn: ['main']
        }, 
        profile: {
            progress: 75
        }
    }

    return (
        <> 
            <div className={`layout layout--main`}>
                <Panel cn="layout_left">
                    <Panel cn="panel panel--top">
                        <Logo {...attrs.logo} />
                    </Panel>
                    <Panel cn="panel panel--bottom">
                        <Search cn="search--page" size="medium" />
                        <Menu {...attrs.menu} /> 
                        <Profile {...attrs.profile} />
                    </Panel>
                </Panel>
                <Panel cn="layout_right">
                    <Panel cn="panel panel--top">
                        <GlobalHeader />
                        <GlobalBody />
                    </Panel>
                </Panel>
            </div>
        </>
    )
}

export default MainLayout;
