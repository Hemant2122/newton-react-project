import { useState } from "react";
import userContext from "./context/userContext";
import LoginComponent from "./components/LoginComponent";
import ProfileComponet from "./components/ProfileComponet";

function AuthApp() {

    const [state, setState] = useState({
        user: null,
    });

    function login(userName, password){
        if(userName === "user" && password === "Password"){
            setState((old) => {
                return{
                    ...old,
                    user: "Hemant"
                }
            })
        }else{
            
        }
    }

    function logout(){
        setState((old) => {
            return{
                ...old,
                user: null,
            }
        })
    }

    const value ={
        user: state.user,
        login,
        logout,
    }


    console.log(value, "value");

    return(
        <>
            <userContext.Provider value={value}>
                <LoginComponent />
                <ProfileComponet />
            </userContext.Provider>
        </>
    )
};

export default AuthApp;