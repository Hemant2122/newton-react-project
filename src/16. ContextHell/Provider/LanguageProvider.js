import { useState } from "react";
import LanguageContext from "../context/LanguageContext";


function LanguageProvider(props){

    const [language, setLanguage] = useState("English");
    const { children } = props;

    return (
        <>
            <LanguageContext.Provider value={{language}} >
                {children}
            </LanguageContext.Provider>
        </>
    )
}

export default LanguageProvider;