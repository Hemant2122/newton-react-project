import { useContext, useState } from "react";
import userContext from "../context/userContext";

function LoginComponent() {

    const {login} = useContext(userContext);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <label htmlFor="login">UserName</label>
      <input value={userName} onChange={(e) => {
        setUserName(e.target.value)
      }} name="login" id="login" placeholder="Login" type="text" />

      <br />
      <label htmlFor="password">UserName</label>
      <input
      value={password}
      onChange={(e) => {
        setPassword(e.target.value)
      }}
        name="password"
        id="password"
        placeholder="password"
        type="password"
      />

      <br />
      <button onClick={() => {
        login(userName, password)
      }}>Login</button>
    </>
  );
}

export default LoginComponent;
