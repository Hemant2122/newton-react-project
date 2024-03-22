import { useState } from "react";
import ContainerTime from "./ContainerTime";

function ConditionalRendering(props){

    const [value, setValue] = useState(false);

    /*
     1. This code is bad Never do this..............
     
     using document keyword in react should not be used unless VVVV important

     function makeDay(){
        const element = document.getElementById("container");
        element.style.background = "aqua";
     }

     function makeNight(){
        const element = document.getElementById("container");
        element.style.background = "gray";
     }

    */

    return (
        <>

            
            { value === false && <ContainerTime color={"pink"} /> }

            { value === true && <ContainerTime color={"blue"} /> }


            <button onClick={() => {
                // makeDay();
                setValue(true);
            }}>
                Day
            </button>

            <button onClick={() => {
                // makeNight();
                setValue(false);
            }}>
                Night
            </button>
        </>
    )
}

export default ConditionalRendering;