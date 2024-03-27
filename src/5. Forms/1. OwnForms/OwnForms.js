import { useState } from "react";

const DEFAULT_VALUE_OF_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
};

const DEFAULT_ERROR_OF_FORM = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
};

function OwnForms() {

    const [form, setForm] = useState(DEFAULT_VALUE_OF_FORM);
    const [errorState, setErrorState] = useState(DEFAULT_ERROR_OF_FORM);

    console.log("Latest Form ", form);
    console.log("ERROR STATE", errorState);


    function onChangeHandaler(event, key){
        setForm((oldValue) => {
            return{
                ...oldValue,
                [key]: event.target.value,
            };
        });
        ValidationForFields(event, key);
    }

    /* ---------------- Validation ---------------- */
    function ValidationForFields(event, key){
        const value = String(event.target.value);

        if(key === "firstName"){
            const nameRegex = /^[A-Za-z]+$/;
            const regexVal = value.match(nameRegex);

            if(!regexVal){
                setErrorState((oldVal) => {
                    return{
                        ...oldVal,
                        firstName: "Your First Name is Not Valid !!!!! ",
                    }
                })
            }

        }else if(key === "lastName"){
            const  lastNameRegex = /^[A-Za-z]+$/;
            const regexVal = value.match(lastNameRegex);

            if(!regexVal){
                setErrorState((oldVal) => {
                    return{
                        ...oldVal,
                        lastName: "Your Last Name is Not Valid !!!",
                    }
                })
            }

        }else if(key === "email"){
            const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
            const emailVal = value.match(emailRegex);

            if(!emailVal){
                setErrorState((oldEmail) => {
                    return{
                        ...oldEmail,
                        email: "Should be Email is not Vaild !!!"
                    }
                })
            }

        }else if(key === "phone"){
            const phoneRegex = /^\d{10}$/;
            const phoneVal = value.match(phoneRegex);

            if(!phoneVal){
                setErrorState((oldPhone) => {
                    return{
                        ...oldPhone,
                        phone: "Check Your Mobile Number !!!",
                    }
                })
            }
        }else{

        }
    }

    return (
        <>
            <h1>FORMS</h1>

            <form>
                <label htmlFor="firstName">First Name* : </label>
                <input onChange={(event) =>  {
                    onChangeHandaler(event, "firstName");
                }} type="text" id="firstName" />
                <div style={{color: "red", fontWeight: "bold"}}>{errorState.firstName}</div>
                <br/>
                <br/>

                <label htmlFor="lastName">Last Name* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "lastName");
                }} type="text" id="lastName" />
                <div style={{color: "red", fontWeight: "bold"}}>{errorState.lastName}</div>
                <br/>
                <br/>

                <label htmlFor="email">Email* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "email");
                }} type="text" id="email" />
                <div style={{color: "red", fontWeight: "bold"}}>{errorState.email}</div>
                <br/>
                <br/>

                <label htmlFor="phone">Phone* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "phone");
                }} type="number" id="phone" />
                <div style={{color: "red", fontWeight: "bold"}}>{errorState.phone}</div>
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