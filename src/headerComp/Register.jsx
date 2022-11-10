import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Headertop from "./Headertop";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const buttonRef= useRef()
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
    else if(!localStorage.getItem("user-info")){
      history.push("/signup")
    }
  }, [],()=>{console.log("USEEFFECT")});

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const notify = (username,email,password) => {
   if( username === "invalid")
    toast("Invalid username!");

    if(email === "Please enter a valid email!"){
      toast("Invalid email!");
    }
    if(password === "Minimum eight characters, at least one letter and one number"){
      toast("Invalid Password!");
    }

  }
  async function signUp(e) {
    e.preventDefault();
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://localhost:3344/Register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    
    if (usermsg === "invalid") {
     notify();
     
    } else if (
      passmsg === "Minimum eight characters, at least one letter and one number"
    ) {
      // toast("Required fields are empty or INVALID");
      notify();
    } else if (passmsg === "password looks good") {
      
      history.push("/");
      localStorage.setItem("user-info", JSON.stringify(result));
    } else if (message === "Please enter a valid email!") {
      // toast("Required fields are empty or INVALID");
      notify();
    }
    
  }

  const [usererr, setusererr] = useState(false);
  const [usermsg, setusermsg] = useState("");

  const [passerr, setpasserr] = useState(false);
  const [passmsg, setpassmsg] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  function userhandler(e) {
    let item = e.target.value;

    if (item.length < 3) {
      setusererr(true);
      setusermsg("invalid");
    } else {
      setusererr(false);
      setusermsg("username looks good");
    }
  }
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  function passhandler(e) {
    let item = e.target.value;

    if (passRegex.test(item)) {
      setpasserr(true);
      setpassmsg("password looks good");
    } else {
      setpasserr(false);
      setpassmsg(
        "Minimum eight characters, at least one letter and one number"
      );
    }
  }

  const emailRegex = /\S+@\S+\.\S+/;
  function mailhandler(e) {
    const item = e.target.value;

    if (emailRegex.test(item)) {
      setIsValid(true);
      setMessage("email looks good");
      console.log(message);
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  }

 
  // const disableButton = (e) =>{
  //   if(name,email,password===""){

  //     buttonRef.current.disabled = true;
   
  // } // this disables the button
  // else if(name,email,password!==""){
  //   buttonRef.current.disabled = false;
  // }
  //  }
  return (
    <>
      <Headertop></Headertop>
      <form className="sign-up-form" >
        <div className="form-heading ">
          <h4>
            <img src="assets/images/logo/logotitan.svg" /> Titan SignUp
          </h4>
        </div>
        <div className="input-wrapper">
          <label htmlFor="user"> User name</label>
          <input
            id="user"
            type="text"
            name="Fullname"
            value={name}
            onChange={(e) => {
              {
                setName(e.target.value);
              }
              {
                userhandler(e);
              }
            }}
          />
          <span className={`usermsg ${usererr ? "error" : "success"}`}>
            {usermsg}
          </span>
        </div>

        <div className="input-wrapper">
          <label htmlFor="mail"> Email</label>
          <input
            id="mail"
            type="email"
            name="Email"
            value={email}
            onChange={(e) => {
              {
                setEmail(e.target.value);
              }
              {
                mailhandler(e);
              }
            }}
          />
          <span className={`message ${isValid ? "success" : "error"}`}>
            {message}
          </span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="pass"> Password</label>
          <input
            id="pass"
            type="password"
            name="Password"
            value={password}
            onChange={(e) => {
              {
                setPassword(e.target.value);
              }
              {
                passhandler(e);
              }
            }}
          />
          <span className={`passmsg ${passerr ? "success" : "error"}`}>
            {passmsg}
          </span>
        </div>
        <div className="sign-up-btn">
          <button
          // ref={buttonRef}
       
            type="submit"
            onMouseDown= {()=> notify(usermsg,message,passmsg)}
            onClick={(e) => {
              {
                signUp(e);
              }
              // {disableButton(e)}
            }}
          >
            SIGN UP
          </button>
        </div>

        <div className="login-redirect">
          <p>
            Already have a account ?<Link> Log In </Link>
          </p>
          <p>OR</p>
        </div>

        <div className="signup-wrapper">
          <button>
            <img src="assets/images/logo/google.png" /> Sign up with Google
          </button>
          <button>
            <img src="assets/images/logo/meta.png" /> Sign Up with Meta
          </button>
         
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Register;
