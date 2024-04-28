import { useContext } from "react";
import DarkThemeContext from "../Contexts/DarkThemeContext";
import styles from "./AboutPage.module.css";


function ContactsPage(){
    const { theme } = useContext(DarkThemeContext);
    return (
        <h1 className={theme === "LIGHT" ? styles.light : styles.dark}>Contacts Page</h1>
    )
}

export default ContactsPage;