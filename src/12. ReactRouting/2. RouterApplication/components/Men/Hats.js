import { Outlet } from "react-router-dom";

function Hats(){
    return(
        <>
            <h1>Hats</h1>
            <Outlet></Outlet>
        </>
    )
}

export default Hats;