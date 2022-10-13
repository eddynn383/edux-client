import { useContext } from "react";
import ThemeContext from "../context/themeContext.jsx";

const useTheme = () => {
    return useContext(ThemeContext);
}

export default useTheme;