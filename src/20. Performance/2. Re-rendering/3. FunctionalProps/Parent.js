import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

function Parent(){

    const [count, setCount] = useState(0);

    const CounterHandler = useCallback(() => {
        setCount((old) => old + 1)
    }, []);

    // abc@123 -> render 2
    // abc@111 -> render 2
    // function CounterHandler(){
    //     setCount((old) => old + 1)
    // }


    const arr = useMemo(() => [1, 2, 3, 4], []);
    const obj = {
        name: "hemant",
        age: "24"
    }

    console.log("Parent rendering")
    return (
        <>
            <h1>Parent {count}</h1>

            <Child arr={arr} setCount={CounterHandler} />
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