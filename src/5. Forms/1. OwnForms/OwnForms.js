import { useState } from "react";

const DEFAULT_VALUE_OF_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
};


function OwnForms() {

    const [form, setForm] = useState(DEFAULT_VALUE_OF_FORM);

    console.log("Latest Form ", form);

    function onChangeHandaler(event, key){
        setForm((oldValue) => {
            return{
                ...oldValue,
                [key]: event.target.value,
            }
        })
    }

    return (
        <>
            <h1>FORMS</h1>

            <form>
                <label htmlFor="firstName">First Name* : </label>
                <input onChange={(event) =>  {
                    onChangeHandaler(event, "firstName");
                }} type="text" id="firstName" />
                <br/>
                <br/>

                <label htmlFor="lastName">Last Name* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "lastName");
                }} type="text" id="lastName" />
                <br/>
                <br/>

                <label htmlFor="email">Email* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "email");
                }} type="text" id="email" />
                <br/>
                <br/>

                <label htmlFor="phone">Phone* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "phone");
                }} type="number" id="phone" />
                <br/>
                <br/>

                <label htmlFor="gander">Gander* : </label>
                <select id="gander" onChange={(event) => {
                    onChangeHandaler(event, "gander");
                }}> 
                    <option value={0}>----- Select-----</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>No this Select</option>
                </select>
                <br/>
                <br/>

                <label htmlFor="dob">DOB* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "dob");
                }} type="date" id="dob" />
                <br/>
                <br/>

                <input type="submit" id="submit" value={"submit Button"} />
                
            </form>
        </>
    )
}

export default OwnForms;


/* 
Whenever you are thinking about FORMS
1. Think about Value and UI (whatever is in the UI should also be insaid the state value and VICA VERSA)
2. ERROR STATE......(use in " regex " Validation form)
3. TOUCH STATE......
*/