import React from "react";
import Headertop from "./Headertop";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      history.push("/");
    }
    else if(!localStorage.getItem("username")){
      history.push("/login")
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let item = { username, password };
    console.warn(item);

    let result = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);

    if (result.token) {
      localStorage.setItem("id", JSON.stringify(result));
      console.log(result);
      localStorage.setItem("username", JSON.stringify(username));
      localStorage.setItem("password", JSON.stringify(password));
      history.push("/");
    }
  }

  return (
    <>
      <Headertop />

      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-heading ">
          <h4>
            <img src="assets/images/logo/logotitan.svg" /> Titan Login
          </h4>
        </div>
        <div className="input-wrapper">
          <label htmlFor="user"> User name</label>
          <input
            id="user"
            type="text"
            name="fullname"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          ></input>
        </div>

        <div className="input-wrapper">
          <label htmlFor="pass"> Password</label>
          <input
            id="pass"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div className="sign-up-btn">
          <button> LOG IN</button>
        </div>
      </form>
    </>
  );
}

export default Login;
