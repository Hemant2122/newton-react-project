import { Component } from "react";
import HelloComponent from "../../1. BasicReact/1. HelloComponent/HelloComponent";
import HelloClassComponent from "../../1. BasicReact/1. HelloComponent/HelloClassComponent";




class CountClassComponent extends Component {
    state = {
        count: 0,
    }


    decrement(){
    
        this.setState((oldValue) => {
            return{
                ...oldValue,
                count: oldValue.count - 1,
            }
        })
        
    }

    increment(){
        this.setState((oldValue) => {
            return{
                ...oldValue,
                count: oldValue.count + 1,
            }
        })
    }

    render() {
        return (
            <>
                <h1>Heading</h1>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    margin: "20px",
                    justifyContent: "content",
                    alignItems: "center"
                }}>

                    <div id="counter">{this.state.count}</div>
                    <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
                        <button onClick={this.decrement.bind(this)}>-</button>
                        <button onClick={this.increment.bind(this)}>+</button>
                    </div>
                </div>

                <div>-------------------SELEPRATOR-----------------</div>
                <HelloComponent />
                <HelloClassComponent />
            </>
        )
    }
}

export default CountClassComponent;