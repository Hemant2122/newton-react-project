import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import LoginContext from "../context/LoginContext";

function MainComponent(){

    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);
    const { login } = useContext(LoginContext);

    return (
        <>
            <h1>Main Component</h1>
            <p>Language: {language}</p>
            <p>Theme: {theme}</p>
            <p>Login: {login}</p>
        </>
    )
}

export default MainComponent;