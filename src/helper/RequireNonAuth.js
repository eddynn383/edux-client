import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireNonAuth = () => {
    const { currentUser } = useAuth();
    const location = useLocation();

    // console.log(currentUser.email === undefined)

    return (
        currentUser.email !== undefined ? <Navigate to="/dashboard" state={{ from: location }} replace /> : <Outlet />
    );
}

export default RequireNonAuth;