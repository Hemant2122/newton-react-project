import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ email, password, setLoggedIn }) {
  const [emailval, setemailval] = useState("");
  const [passval, setpassval] = useState("");

  function submitHandler(event){
    event.preventDefault();
    if(emailval === email && passval === password){
        setLoggedIn(true);
    }else{
        alert("this user is not registerd");
    }
    
  }

  return (
    <div id="loginPage">
      <h1 id="login-tag">Login</h1>
      <form onSubmit={submitHandler}>
        <h3>Email</h3>
        <input
          placeholder="abc@gmail.com"
          type="email"
          id="login-email"
          value={emailval}
          onChange={(e) => setemailval(e.target.value)}
        />

        <h3>Password</h3>
        <input
          placeholder="Enter password"
          type="password"
          id="login-password"
          value={passval}
          onChange={(e) => setpassval(e.target.value)}
        />
        <br />
        <button id="login-submit" type="submit">
          Login
        </button>
      </form>
      <br />
      Don't have an account ?
      <button id="login-to-register">
        <Link to="/Register">Register here ..</Link>
      </button>
    </div>
  );
}
export default Login;
