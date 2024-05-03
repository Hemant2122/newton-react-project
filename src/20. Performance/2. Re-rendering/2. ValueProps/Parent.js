import { useMemo, useState } from "react";
import Child from "./Child";

function Parent(){

    const [count, setCount] = useState(0);

    const arr = useMemo(() => [1, 2, 3, 4], []);
    const obj = {
        name: "hemant",
        age: "24"
    }

    console.log("Parent rendering")
    return (
        <>
            <h1>Parent {count}</h1>
            <button onClick={() => setCount((old) => old + 1)}>Click me</button>

            <Child arr={arr} />
        </>
    )
}

export default Parent;


/**
 * arr or obj in every render will have the different address making the child props different every time
 * die to this the React.memo() will not work in child.
 *
 * Thats why we use useMemo to make sure the arrays reference is not changing during re-rendring.
 *
 */