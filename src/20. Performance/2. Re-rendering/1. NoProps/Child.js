import React from "react";


function Child(){

    console.log("Child rendering")
    return (
        <>
            <h1 style={{border: "1px solid black", margin: "10px", padding: "10px"}}>Child</h1>
        </>
    )
}

export default React.memo(Child);