import { useContext } from "react";
import userContext from "../context/userContext";


function ProfileComponet(){

    const {logout} = useContext(userContext);
    return(
        <>
            <h1>Here is my profile</h1>
            <button onClick={() => {
                logout();
            }}>Logout</button>
        </>
    )
}

export default ProfileComponet;