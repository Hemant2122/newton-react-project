import { Component } from "react";


class LifeCycle extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1, 
        }
    }

    // Errro Boundary: See more in errror boundary
    componentDidCatch(){
        
    }

    // useEffect => Only for Mounting Phase
    componentDidMount(){
        console.log("componentDidMount");
    }

    // useEffect => Only for Update Phase
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");

        // VVVVVIMPORTANT: Always use If prevstate vs new state comparision and the only 
        // Update state here

        /* if(prevState.coutn != this.state.count){
            this.setState() --> it is a function given by React to update the state.
        } */
    }

    // useEffect (Return part) => Only work when the component is going to be unmounted
    componentWillUnmount(){
        console.log("ponentWillUnmount");
    }


    render(){
        console.log("Render function");
        return(
            <>
                <h1>Hello</h1>
                <h2>What is this</h2>
            </>
        )
    }
}

export default LifeCycle;