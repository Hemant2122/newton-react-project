import { useState } from "react";
import LoginContext from "../context/LoginContext";

function LoginProvider(props){

    const { children } = props;
    const [login, setLogin] = useState("USERXYZ");

    return (
        <LoginContext.Provider value={{login}} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;