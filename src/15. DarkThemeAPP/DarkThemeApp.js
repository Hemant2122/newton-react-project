import { NavLink, Route, Routes } from "react-router-dom";
import ContactsPage from "./Components/ContactsPage";
import AboutPage from "./Components/AboutPage";
import Navigation from "./Components/Navigation";
import { useState } from "react";
import DarkThemeContext from "./Contexts/DarkThemeContext";



function DarkThemeApp(){

    const [theme, setTheme] = useState("LIGHT");

    return(
        <>
            <DarkThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
                <Navigation />
                <h1>Dark Theme App</h1>


                <Routes>
                    <Route path="/" element={<ContactsPage /> }></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                </Routes>
            </DarkThemeContext.Provider>
        </>
    )
}

export default DarkThemeApp;