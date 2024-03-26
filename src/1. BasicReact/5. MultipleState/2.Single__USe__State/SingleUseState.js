import { useState } from "react"


function SingleUseState(){
    const [state, setState] = useState({
        counter: 0,
        name: "Hemant",
    })

    const {name, counter} = state;
    
    return (
        <>
            <div style={{
                margin: "20px",
                border: "1px solid black",
            }}>
                {name}
            </div>

            <div style={{
                margin: "20px",
                border: "1px solid black",
            }}>
                {counter}
            </div>

            <button onClick={ () => {
                setState((oldState) => {
                    return{
                        ...oldState,
                        counter: oldState.counter + 1,
                    }
                })
            }}>CLAP</button>

            <button onClick={() => {
                setState((oldValue) => {
                    return {
                        ...oldValue,
                        name : "Arun",
                    }
                })
            }}>Arun</button>
        </>
    )
}

export default SingleUseState;