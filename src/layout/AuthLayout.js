
import { Outlet } from "react-router-dom";

import imageUrl from '../assets/images/login.jpg'
import customerLogoUrl from '../assets/images/volvo.svg'

import '../assets/design/_auth.scss'

const AuthLayout = (o) => {

    return (
        <> 
            <div className="layout layout--auth">
                <div className="layout_left">
                    <div className="panel panel--top">
                        <div className="module wallpaper">
                            <img className="wallpaper_image" src={imageUrl} alt="Login Wallpaper" />
                        </div>
                    </div>
                </div>
                <div className="layout_right">
                    <div className="panel panel--top">
                        <div className="module logo" style={{padding: "40px 0"}}>
                            <img className="logo_image" src={customerLogoUrl} alt="Volvo" style={{width: "140px"}}/>
                        </div>
                        <div className="module form">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout;
