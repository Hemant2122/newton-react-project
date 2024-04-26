import { NavLink, Route, Routes } from "react-router-dom";


function DarkThemeApp(){

    return(
        <>

            <nav>
                <li>
                    <NavLink to="/">Contacts</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>

                <button>Toogle Theme</button>
            </nav>

            <h1>Dark Theme App</h1>


            <Routes>
                <Route path="/" element={<h1>Contacts</h1>}></Route>
                <Route path="/about" element={<h1>About</h1>}></Route>
            </Routes>
        </>
    )
}

export default DarkThemeApp;