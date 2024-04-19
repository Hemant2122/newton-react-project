import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import MenPage from "./pages/Men/MenPage";
import Hats from "./components/Men/Hats";
import NotFoundPage from "./pages/NotFoundPage";
import AnimalPage from "./pages/Animal/AnimalPage";



function RouterApp(){


    return (
        <>
            {/* <HomePage /> 
            <MentorPage /> */}

            {/* NAV BAR */}
            <nav style={{
                    background: "cyan",
            }}>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "10px",
                    padding: "10px",
                }}>
                    <li>
                        <NavLink to="/mentor">Mentor</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>

            {/* REAL ROUTING LOGIC */}

            <Routes>
                {/* ---------------------- 1st Phase of Learning Route ---------------------- */}
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/mentor" element={<MentorPage />}></Route>
                <Route path="/*" element={<NotFoundPage />}></Route>

                {/* --------------------- 2nd Phase of Route -> Use IT whenever NEEDED --------------------- */}

                {/* At a perticular Path Ican give some Extra Information like ||| http://localhost:3000/animal/?q=dog&key=value
                
                    q=dog&key=value are THE EXTRA INFORMATION (it is nothing but key value Pair)

                    ofCource at /animal ROUTE we are showing AnimalPage ofcource we can get the EXTRA INFORMATION in the 
                    AnimalPage Component Also /=
                
                */}

                <Route path="/animal" element={<AnimalPage />}></Route>


                {/* ----------------------- 3rd Phase of Route ---------------------------- */}

                <Route path="/men" element={<MenPage />} >
                    {/* <Route path="/hats" element={<Hats />}></Route> */}
                </Route>

            </Routes>

        </>
    )
}

export default RouterApp;