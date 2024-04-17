import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";



function RouterApp(){


    return (
        <>
            {/* <HomePage /> 
            <MentorPage /> */}

            {/* NAV BAR */}
            <nav>

            </nav>

            {/* REAL ROUTING LOGIC */}

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/mentor" element={<MentorPage />}></Route>
            </Routes>

        </>
    )
}

export default RouterApp;