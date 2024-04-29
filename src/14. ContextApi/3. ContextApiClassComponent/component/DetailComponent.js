import { Component } from "react";
import ThemeClassContext from "../context/ThemeClassContext";
import LoginClassContext from "../context/LoginClassContext";

class DetailComponent extends Component{

    // I can`t use useContext();
    
    render(){

        return(
            <>

                <h1>Detail Component</h1>
                
                <LoginClassContext.Consumer>
                    {(props) => {
                        const { user } = props;
                        return(
                            <>
                                <h4>THE USER LOGGED IN IS ::: {user} </h4>

                                <ThemeClassContext.Consumer>
                                    {(props) => {
                                        const {theme} = props;
                                        return <h1>Heading for theme ::: {theme}</h1>
                                    }}
                                </ThemeClassContext.Consumer>
                            </>
                        )
                    }}
                </LoginClassContext.Consumer>

            </>
        )
    }
    
}

export default DetailComponent;