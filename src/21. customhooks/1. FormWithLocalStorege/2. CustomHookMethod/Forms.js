import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";


function Forms(){

    const [name, setName] = useLocalStorage("name");
    const [phone, setPhone] = useLocalStorage("phone");

    console.log(name, phone);

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

            <br/><br/>

            {name}
            <br/>
            {phone}
        </>


    )

}

export default Forms;
