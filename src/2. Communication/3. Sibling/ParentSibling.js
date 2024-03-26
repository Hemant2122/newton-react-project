import { useState } from "react";
import Child1Counter from "./Child1Counter";
import Child2OperationDisplay from "./Child2OperationDisplay";


function ParentSibling(){

    const [info, setInfo] = useState([]);

    const childToParentCommunicator = (infoFromChild1) => {
        console.log("PARENT RECIVED ::: ", infoFromChild1);
        setInfo(infoFromChild1)
    }

    
    
    return (
        <>
            <h1 style={{
                margin: "10px", 
                background: "red",
                textAlign: "center"
            }}>
                Welcome
            </h1>

            <div style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between"
            }}>
                <Child1Counter handler={childToParentCommunicator} />
                <Child2OperationDisplay info={info}/>
            </div>
        </>
    )
}

export default ParentSibling;