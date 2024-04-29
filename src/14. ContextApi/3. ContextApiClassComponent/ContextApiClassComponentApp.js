import { Component } from "react";
import DetailComponent from "./component/DetailComponent";
import ThemeClassContext from "./context/ThemeClassContext";
import LoginClassContext from "./context/LoginClassContext";


class ContextApiClassComponentApp extends Component{

    render(){
        return(
            <>
                <h1>
                    ContextApiClassComponentApp

                    <LoginClassContext.Provider value={{user: "HEMANT"}} >
                        <ThemeClassContext.Provider value={{theme: "LIGHT_BLUE"}} >
                            <DetailComponent />
                        </ThemeClassContext.Provider>
                    </LoginClassContext.Provider>

                </h1>
            </>
        )
    }
}

export default ContextApiClassComponentApp;