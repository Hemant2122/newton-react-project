import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkThemeContext from "../Contexts/DarkThemeContext";
import styles from "./AboutPage.module.css";

function Navigation() {
    const { theme, setTheme } = useContext(DarkThemeContext);

    function onClickHander(){
        setTheme(theme === "LIGHT" ? "DARK" : "LIGHT");
    }

  return (
    <nav className={theme === "LIGHT" ? styles.light : styles.dark} 
    style={{
        display: "flex",
        gap: "10px",
        height: "20px",
    }}>
      <li>
        <NavLink to="/">Contacts</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <button onClick={onClickHander}>Toogle Theme</button>
    </nav>
  );
}

export default Navigation;
