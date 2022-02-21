import React from "react";
import { useState, useEffect } from "react";
import Headertop from "./Headertop";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  // sets page redirect if the user is logged in
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/");
    }
  }, []);

  // use form validation

  // form values
  const [values, setValues] = useState({});

  // errors
  const [errors, seterrors] = useState({});

  //  a function to validate each input value
  // const validate=(e, name, value)=>{
  //   switch(name){
  //           case'User name':
  //              if(value.length<= 4){
  //               seterrors({
  //                 ...errors,
  //                 Username:"Username must have atleast 5 letters"
  //               })
  //              }
  //              else{
  //                seterrors({
  //                  username:""
  //                })
  //              }
  //              break;

  //              case'email':
  //              if(
  //                !new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  //                ){
  //                 seterrors({
  //                   ...errors,
  //                   email:"Username must have atleast 5 letters"
  //                 })
  //                }
  //                break;

  //              default:
  //                break;

  //   }
  // }

  // method to handle form inputs
  const handleChange = (e) => {
    let email = e.target.email;
    let name = e.target.name;
    let val = e.target.value;

    // validate(e, name, val);

    if (val.length <= 4) {
      seterrors({
        ...errors,
        username: "length should be 4 charater",
      });
    } else {
      seterrors({
        ...errors,
        username: "",
      });
    }
    // set these values in state
    setValues({
      // spread to copy the old values
      ...values,
      [name]: val,
    });
  };
  console.log("error", errors);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function signUp(e) {
    e.preventDefault();
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://802d-183-87-13-43.ngrok.io/watches", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);

    if ((name, email, password === "")) {
      alert("Required fields are empty");
    } else if ((name, email, password !== "")) {
      history.push("/");
      localStorage.setItem("user-info", JSON.stringify(result));
    }
  }
  return (
    <>
      <Headertop></Headertop>
      <form className="sign-up-form">
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
    </>
  );
};

export default Register;
