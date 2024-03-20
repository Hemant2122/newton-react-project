import { useState } from "react";


function CounterComponent(props){
    const { heading } = props;
    console.log("Rendering", "function Callied")
    
    // Varible.... (TO).
    // let count = 0;


    // State -> State is again function called.....

    const [count, setCount] = useState(0);

    const decrement = () => {
        // count--; -> with state Variable Do Not use this

        setCount(count - 1);
        console.log(count, "decrement clicked count");
    }

    const increment = () => {
        // count++;

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        /* 
        You should Only use the new setCount((oldValue) => oldValue + 1);
        */

        setCount((oldValue) => oldValue + 1);
        setCount((oldValue) => oldValue + 1);
        setCount((oldValue) => oldValue + 1);
        setCount((oldValue) => oldValue + 1);
        setCount((oldValue) => oldValue + 1);
        
        console.log(count, "increment clicked count");
    }

    return (
        <>
        <h1>{heading}</h1>

        <div style={{
            display:"flex",
            flexDirection: "column",
            gap: "10px",
            margin: "20px",
            justifyContent: "content",
            alignItems: "center"
        }}>

            <div id="counter">{count}</div>
            <div style={{display:"flex", gap:"10px", margin:"20px"}}>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            </div>
        </div>
        </> 
    );
}

export default CounterComponent;