import React, { useState } from "react";

function ValidateLoginForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [color, setColor] = useState("");

    function onSubmitForm(e){
        e.preventDefault();
        if(!username || !password || !email){
            setError("All Fields must be filled");
            setColor("red")
        }else if(!email.includes("@")){
            setError("Email is invalid");
            setColor("red")
        }else{
            setError("No Error Found Congrats the user is logged in.");
            setColor("green")
        }
    }


    return(
        <div id="main">
            <form>
                <input type="text" placeholder="Username" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <br />
                <input type="email" placeholder="Email" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <br />
                <div className="error" style={{color: color}}>{error}</div>
                <button onClick={onSubmitForm}>Login</button>
            </form>
        </div>
     );
}

export default ValidateLoginForm;