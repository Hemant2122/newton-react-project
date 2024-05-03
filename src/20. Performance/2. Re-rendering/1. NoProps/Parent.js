import { useState } from "react";
import Child from "./Child";

function Parent(){

    const [count, setCount] = useState(0);

    console.log("Parent rendering")
    return (
        <>
            <h1>Parent {count}</h1>
            <button onClick={() => setCount((old) => old + 1)}>Click me</button>

            <Child />
        </>
    )
}

export default Parent;