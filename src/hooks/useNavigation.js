import { useContext } from "react";
import NavContext from "../context/NavContext";


const useNav = () => {
    return useContext(NavContext);
}

export default useNav;