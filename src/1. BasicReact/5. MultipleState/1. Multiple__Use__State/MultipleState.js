import { useState } from "react";

function MultipleState(){
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Ankit");
    return (
        <>
            <div style={{margin: "20px", border: "1px solid black",}}>
                {name}
            </div>
            <div style={{margin: "20px", border: "1px solid black",}}>
                {counter}
            </div>

            <button onClick={() => {
                setCounter((oldValue) => {
                    return oldValue + 1;
                })
            }}>
                CLAP
            </button>
            <button onClick={() => {
                setName("Hemant");
            }}>
                Hemant
            </button>
            <button onClick={() => {
                setName("Arun")
            }}>
                Arun
            </button>
        </>
        
    )
}

export default MultipleState;