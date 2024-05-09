import { useEffect, useState } from "react";


function Forms(){

    // lazy initialization.

    //  EXPENSIVE its solution is lazy initialization.
    // const obj = JSON.parse(localStorage.getItem("formInput"));
    // console.log(obj);


    const [name, setName] = useState(() => {
        console.log("lazy initialization");
        const val = JSON.parse(localStorage.getItem("formInput")).name;

        return val ? val : "";
    });
    const [phone, setPhone] = useState(() =>{
        console.log("lazy initialization");
        const val = JSON.parse(localStorage.getItem("formInput")).phone;

        return val ? val : "";
    });

    console.log(name, phone);

    // SAVING IN LOCAL SRORAGE
    useEffect(() => {
        
        // return() => {
            // Unmount
            localStorage.setItem("formInput", JSON.stringify({name, phone}))
        // }
    }, [name, phone]);

    return(
        <>
            <h1>Forms</h1>

            <label htmlFor="nmae">Name</label>
            <input id="name" name="name" placeholder="add Name here" value={name} onChange={ (e) => {
                setName(e.target.value)
            }} />
            <br/>

            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" placeholder="add Phone here" value={phone} onChange={(e) => {
                setPhone(e.target.value)
            }} />
            
                <br/>
            <button>Submit</button>
        </>
    )
}

export default Forms;


/*
    Custom hook / Reusable Logic
    1. Take care of saving the values in local storage
    2. Retrieving the value form Local Storege.
*/

/*
    RULES OF STATING CUSTOM HOOKS
    1. like useState, useEffect, we have to add "use" keyword in our custom hook 

    ex: useLocalStorage, useToggle, useFetch.
*/