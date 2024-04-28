import { useState } from "react";
import ThemeContext from "../context/ThemeContext";


function ThemeProvider(props){

    const { children } = props;
    const [theme, setTheme] = useState("LIGHT");

    return (
        <ThemeContext.Provider value={{theme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;