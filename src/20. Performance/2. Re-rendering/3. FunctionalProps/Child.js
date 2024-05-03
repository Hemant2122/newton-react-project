import React from "react";


function Child(props){

    const { arr, setCount } = props; 

    console.log("Child rendering")
    return (
        <>
            <h1 style={{border: "1px solid black", margin: "10px", padding: "10px"}}>Child</h1>
            <button onClick={() => setCount((old) => old + 1)}>Click me</button>

            {arr.map((item) => {
                return(
                    <div key={item}>
                        {item * 2}
                    </div>
                )
            })}
        </>
    )
}

export default React.memo(Child);