import { useState } from "react";
import ErrorContainer from "./ErrorContainer";

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

// ------------************ SUBMISSION *************-----------------------

    function onFormSubmission(event){
        event.preventDefault();

        // Validate.........
        const isFormValid = onSubmissionValidateForm();

        if(isFormValid){
            // Send the form Object to the server.
            console.log("SEND THE FORM OBJECT TO SERVER")
        }else{
            // show the popup
            alert("Form should be Valid");
        }

        // GET.

        // fetch(`asdasdasd.com`, {
        //     method: "GET",
        // })

        fetch(`asdasdasd.com?${"firstName" + "=" + form.firstName}&${"lastName" + "=" + form.lastName}&${"phone" + "=" + form.phone}&${"email" + "=" + form.email}&${"dob" + "=" + form.dob}`)


        /*
        // POST. 
        fetch(`asdasdasd.com`, {
            method: "POST",
            body: JSON.stringify(form),
        })
        .then(response => response.json())
        .then(data => console.log(data));

        */

    }

    function onSubmissionValidateForm(){
        let isFormValid = true;

        const keys = Object.keys(errorState);
        console.log(keys, "keys");

        for(let i=0; i<keys.length; i++){
            if(errorState[keys[i]]){
                isFormValid =  false;
                break;
            }
        }

        return isFormValid;
    }

    // ------------************ SUBMISSION *************-----------------------

    function onChangeHandaler(event, key) {
        // MANLY THIS FUNCTION IS SETTING THE VALUES IN FORM
        setForm((oldValue) => {
            return {
                ...oldValue,
                [key]: event.target.value,
            };
        });
        ValidationForFields(event, key)
    }
    
    // function onChangeErrorHandler(errorString, key){
    //     setErrorState((oldVal) => {
    //         return {
    //             ...oldVal,
    //             [key]: errorString,
    //         };
    //     });
    // }

    /* ---------------- Validation ---------------- */

    function getSpecialCharacters(value = "") {
        let arrOfSpecialChar = [];
        const set = new Set(); // {'@', '%', '$'}
        for (let i = 0; i < value.length; i++) {
            const ch = value.charAt(i);
            const chCode = Number(value.charCodeAt(i));

            if (chCode >= 65 && chCode <= 90 || chCode >= 97 && chCode <= 122) {
                // do not do anything
                // IT MEANS my character is a alphabet
            } else {
                // all the things are special character here
                set.add(ch);
            }
        }

        // arrOfSpecialChar MIGHT CONTAINER DUBLICATE VALUES WE DO NOT WANT THAT.

         arrOfSpecialChar = Array.from(set); // ['@', '%', '^']

        return arrOfSpecialChar.join();
    }

    function ValidationForFields(event, key) {
        const value = String(event.target.value);

        const localError = {};

        // array -> storage to store ~~~@@##$%^&*


        if (key === "firstName") {
            const nameRegex = /^[A-Za-z]+$/;
            const regexVal = value.match(nameRegex);

            if (value && !regexVal) {
                // 

                localError[key] = `First Name Should Be Only String No Special Character ${getSpecialCharacters(value)}`;
                
            } else if (value && regexVal) {
                // Remove special Character in this iput fine
                // Example : - Q. :- Hemant!@##$$$ --->  Answer : Hemant
                localError[key] = "";
            } else {
                // This input Empty
                localError[key] = "Required*";
                // onChangeErrorHandler(`Required*`, "firstName")
            }

        } else if (key === "lastName") {
            const lastNameRegex = /^[A-Za-z]+$/;
            const regexVal = value.match(lastNameRegex);

            if (value && !regexVal) {

                localError[key] =`Last Name Should Be Only String No Special Character ${getSpecialCharacters(value)}`;
                
            } else if (value && regexVal) {
                localError[key] = "";
            } else {
                localError[key] = "Required*";
            }

        } else if (key === "email") {
            const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
            const emailVal = value.match(emailRegex);

            if (value && !emailVal) {
                
                localError[key] = "Should be Email is not Vaild !!!";
                
            } else if (value && emailVal) {
                localError[key] = "";
            } else {
                localError[key] = "Required*";
            }

        } else if (key === "phone") {
            const phoneRegex = /^\d{10}$/;
            const phoneVal = value.match(phoneRegex);

            if (value && !phoneVal) {
                localError[key] = "Check Your Mobile Number !!!";
            } else if (value && phoneVal) {
                localError[key] = "";
            } else {
                localError[key] = "Required*";
            }
        } else {

        }
        setErrorState((oldVal) => {
            return {
                ...oldVal,
                ...localError,
            }
        });
    }

    return (
        <>
            <h1>FORMS</h1>

            <form onSubmit={onFormSubmission}>
                <label htmlFor="firstName">First Name* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "firstName");
                }} type="text" id="firstName" />

                <ErrorContainer errorString={errorState.firstName} />

                <br />
                <br />

                <label htmlFor="lastName">Last Name* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "lastName");
                }} type="text" id="lastName" />

                <ErrorContainer errorString={errorState.lastName} />

                <br />
                <br />

                <label htmlFor="email">Email* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "email");
                }} type="text" id="email" />

                <ErrorContainer errorString={errorState.email} />

                <br />
                <br />

                <label htmlFor="phone">Phone* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "phone");
                }} type="number" id="phone" />

                <ErrorContainer errorString={errorState.phone} />

                <br />
                <br />

                <label htmlFor="gander">Gander* : </label>
                <select id="gander" onChange={(event) => {
                    onChangeHandaler(event, "gander");
                }}>
                    <option value={0}>----- Select-----</option>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>No this Select</option>
                </select>
                <br />
                <br />

                <label htmlFor="dob">DOB* : </label>
                <input onChange={(event) => {
                    onChangeHandaler(event, "dob");
                }} type="date" id="dob" />
                <br />
                <br />

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




