import React from "react";
import Headertop from "./Headertop";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function Login() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);
  return (
    <>
      <Headertop />
     
      {/* <form className="sign-up-form">
        <div className="form-heading ">
          <h4>
            {" "}
            <img src="assets/images/logo/logotitan.svg" /> Titan SignUp
          </h4>
        </div>
        <div className="input-wrapper">
          <label htmlFor="user"> User name</label>
          <input
            id="user"
            type="text"
            name="fullname"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              {
                handleChange(e);
              }
            }}
          ></input>
        </div>

        <div className="input-wrapper">
          <label htmlFor="mail"> Email</label>
          <input
            id="mail"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              {
                handleChange(e);
              }
            }}
          ></input>
        </div>
        <div className="input-wrapper">
          <label htmlFor="pass"> Password</label>
          <input
            id="pass"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              {
                handleChange(e);
              }
            }}
          ></input>
        </div>
        <div className="sign-up-btn">
          <button onClick={(e) => signUp(e)}> SIGN UP</button>
        </div>
      </form> */}
    </>
  );
}

export default Login;
