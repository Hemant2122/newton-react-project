
import MainComponent from "./Components/MainComponent";
import LanguageProvider from "./Provider/LanguageProvider";
import LoginProvider from "./Provider/LoginProvider";
import ThemeProvider from "./Provider/ThemeProvider";



function ContextHellApp(){

    return(
        <LoginProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <MainComponent />
                </LanguageProvider>
            </ThemeProvider>
        </LoginProvider>
    )
}

export default ContextHellApp;


// DRWBACK
// 1. FLUX -> REDUX -> Flux -> is rate of change, if this is high then CONTEXT API can't handle it,
// REDUX  is a great tool to handle all these things.
// 2. Context HElL