import { useContext } from "react";
import CPContext from "../context/CPContext";


const useCP = () => {
    return useContext(CPContext);
}

export default useCP;