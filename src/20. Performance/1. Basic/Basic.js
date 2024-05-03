

// Life Cycle of React COMPONENT

import { useState } from "react";

/*
mount, update,unmonut
*/


// Life Cycle of Recat Project

/* 
    1. Rendering
    2. Reconciliation -> what are the changes we have to do in VD
    3. Commit -> 

*/

function Basic(){
    let i  = 2;
    
    // if(i === 2){
    //     const [count, setCount] = useState(0);
    // }

    const [count, setCount] = useState(0);
    console.log("rendering");

    return (
        <>
            <h1>Counter {count}</h1>

            <button onClick={() => setCount(5)} >Click me</button>
        </>
    )

}

export default Basic;

/*
    1. HOOKS SHOULD never be used inside a condition.
    2. React DO not re-render the FUnction (component) if the prevStateValue === newSetStateValue
*/