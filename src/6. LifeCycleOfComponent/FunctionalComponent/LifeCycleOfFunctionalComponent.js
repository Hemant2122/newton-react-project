import { useEffect, useState } from "react";



function LifeCycleOfFunctionalComponent(){

    const [greeting, setGreeting] = useState("Hello World");
    const [phase, setPhase] = useState("MONUTING");

    console.log("RENDER !! || " + phase);

    // -------------*********** BAD API CALL ***********---------------

    // One thing we have Established is the this API call should happen after the UI is SHOWN.
    // FOR THAT WE CANT PUT THE API CALL after the Return keyword.

    // function apiCall(){
    //     // -------- REAL API CALL -------
    //     // fetch("google") // 5sec 100ms
    //     console.log("API CALLING IS WORKING");

    //     //--------------- MOCKING THE API ------------
    //     for(let i=0; i< 2000000; i++){
    //         console.log("API CALLING IS FINSISHED");
    //     }
    // }

    // apiCall();

    // ---------******** *******------------


    //-----------**** HERS THE SOLUTION TO ABOVE PROBLEM ****------------

    // useEffect is the GURANTEE that if will After the UI  is shown (return has worked)
    useEffect(() => {
        function apiCall(){
            console.log("USE EFFECT :: API CALLING IS WORKING");
            // for(let i=0; i< 2000000; i++){
            //     console.log("API CALLING IS FINSISHED");
            // }

            setTimeout(() => {
                console.log("USE EFFECT :: API CALLING IS FINSISHED");
            }, 15000);
        }

        apiCall();
    });



    console.log("UI IS ABOUT TO BE SHOWN");

    return(
        <div style={{border: "1px solid black"}}>
            <h1>{greeting}</h1>
            <button onClick={() => {
                setGreeting((old) => old === "Hello World" ? "Bye" : "Hello World");
                setPhase("UPDATE PHASE")
            }}>
                Click
            </button>
        </div>
    );
}

export default LifeCycleOfFunctionalComponent;


// OBJECTIVE FOR THIS FILE:

// 1. learn about mounting, update and unmounting phase.
// 2. to know to do API CALL, or how to run someting after the RETURN keyword (UI).