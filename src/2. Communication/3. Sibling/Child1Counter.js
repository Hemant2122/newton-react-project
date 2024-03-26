import { useState } from "react";


function Child1Counter(props){

    const [count, setCount] = useState(0);

    const {handler} = props;

    return (
        <>
            <div style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid black",
            }}>
                <h1>Counter</h1>
                <div>{count}</div>

                <button onClick={() => {
                    setCount((oldVal) => oldVal - 1);
                    handler("DECREMENT");
                }}>-Dec</button>
                <button onClick={() => {
                    setCount((oldVal) => oldVal + 1);
                    handler("INCREMENT");
                }}>+Inc</button>
            </div>
        </>
    )
}

export default Child1Counter;