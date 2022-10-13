import { useEffect } from 'react'

import { Routes, Route, useLocation } from 'react-router-dom'
// Page Layouts
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import AccessibilityLayout from './layout/AccessibilityLayout'

// Pages used
//Auth
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword'

import Dashboard from './pages/Dashboard'
import Catalog from './pages/Catalog'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import Courses from './pages/Courses'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'

// Accessibility
import Unauthorized from './pages/Accessibility/Unauthorized'
import PageNotFound from './pages/Accessibility/PageNotFound'

// Helpers
import RequireAuth from './helper/RequireAuth'
import Prefetch from './helper/Prefetch'
import PersistLogin from './helper/PersistLogin'

// Syles
import './assets/design/app.scss'

// Config
import { ROLES } from './config/roles'

import useNav from './hooks/useNavigation'

function App() {
    const { title } =  useNav()

    useEffect(() => {
        console.log(title)
    }, [title])

    return (
        <>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                </Route>
                <Route element={<PersistLogin />}>
                    <Route path="/" element={<MainLayout />}>
                        <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]}/>}>       
                            <Route element={<Prefetch />}>         
                                {/* <Route index element={<Dashboard />} />  */}
                                <Route path="dashboard" title="dash" state={true} element={<Dashboard />} />
                                <Route path="catalog" element={<Catalog />} />
                                <Route path="settings" element={<Settings />} />
                                <Route path="profile" element={<Profile />} />
                                <Route path="notifications" element={<Notifications />} />
                                <Route path="messages" element={<Messages />} />
                                <Route path="users" element={<Users />} />
                                <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]}/>}>
                                    <Route path="management/users" element={<Users />} />
                                    <Route path="management/courses" element={<Courses />} />
                                </Route>                 
                            </Route>             
                        </Route>   
                    </Route>
                </Route>    
                <Route path="/" element={<AccessibilityLayout />}>
                    <Route path="unauthorized" element={<Unauthorized />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
