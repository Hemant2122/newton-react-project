import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import MenPage from "./pages/Men/MenPage";
import Hats from "./components/Men/Hats";
import NotFoundPage from "./pages/NotFoundPage";
import AnimalPage from "./pages/Animal/AnimalPage";
import Paints from "./components/Men/Paints";
import RendomMenProducts from "./components/Men/RendomMenProducts";
import styles from "./RouterApp.module.css";



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
                        <NavLink className={(navLinkProps) => {
                            const {isActive} = navLinkProps;
                            return isActive ? `${styles.activeLink}` : '';
                            
                        }} to="/mentor">Mentor</NavLink>
                    </li>

                    <li>
                        <NavLink className={(navLinkProps) => {
                            const {isActive} = navLinkProps;
                            return isActive ? `${styles.activeLink}` : '';
                            
                        }} to="/about" reloadDocument >About</NavLink>
                    </li>

                    <li>
                        <NavLink className={(navLinkProps) => {
                            const {isActive} = navLinkProps;
                            return isActive ? `${styles.activeLink}` : '';
                            
                        }} to="/animal?q=dog">DOG</NavLink>
                    </li>

                    <li>
                        <NavLink className={(navLinkProps) => {
                            const {isActive} = navLinkProps;
                            return isActive ? `${styles.activeLink}` : '';
                            
                        }} to="/animal?q=cat">CAT</NavLink>
                    </li>

                    <li>
                        <NavLink className={(navLinkProps) => {
                            const {isActive} = navLinkProps;
                            return isActive ? `${styles.activeLink}` : '';
                            
                        }} to="/men" end >Men Collection</NavLink>
                    </li>
                </ul>
            </nav>
            {/* end --> The end prop changes the matching logic for the active and pending states to only match to the "end" of the NavLink's to path. */}

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

                {/* when ypu are using the Parent child Route Relationship then we need to have 
                    <Outlet></Outlet> in Parent component
                    to that Our child Component can be  Displayed  in that Parent Component.
                */}

                <Route path="/men" element={<MenPage />} >
                    <Route path="hats" element={<Hats />}></Route>
                    <Route path="Pant" element={<Paints />}></Route>
                    <Route path=":id" element={<RendomMenProducts />}></Route>
                </Route>

            </Routes>

        </>
    )
}

export default RouterApp;


// red IMP link : --> https://reactrouter.com/en/main