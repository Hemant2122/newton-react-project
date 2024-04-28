import { useContext } from "react";
import DarkThemeContext from "../Contexts/DarkThemeContext";
import styles from "./AboutPage.module.css";

function AboutPage(){

    const { theme } = useContext(DarkThemeContext);
    console.log(theme);
    return (
        <h1 className={theme === "LIGHT" ? styles.light : styles.dark }>About Page</h1>
    )
}

export default AboutPage;