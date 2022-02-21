import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Validation from "./Validation";

function Mymodal(props, submitform) {
  const reload = () => {
    window.location.reload(false);
  };

  const [values, setValues] = useState({
      fullname: "",
      email: "",
      password: "",
    }),
    [errors, setErrors] = useState({});

  const [dataiscorrect, setdataiscorrect] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setdataiscorrect(true);
  };

  const handlechange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataiscorrect) {
      submitform(true);
    }
  });
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onExit={reload}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            LOGIN to Continue
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-wrapper">
          <form>
            <div className="input-wrapper">
              <label for="user"> User name</label>
              <input
                id="user"
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handlechange}
              ></input>
              {errors.fullname && (
                <p className="error-msg">*{errors.fullname}</p>
              )}
            </div>

            <div className="input-wrapper">
              <label for="mail"> Email</label>
              <input
                id="mail"
                type="email"
                name="email"
                value={values.email}
                onChange={handlechange}
              ></input>
              {errors.email && <p className="error-msg">*{errors.email}</p>}
            </div>
            <div className="input-wrapper">
              <label for="pass"> Password</label>
              <input
                id="pass"
                type="password"
                name="password"
                value={values.password}
                onChange={handlechange}
              ></input>
              {errors.password && (
                <p className="error-msg">*{errors.password}</p>
              )}
            </div>

            <p>
              {" "}
              Already have a account ?{" "}
              <button onClick={handleFormSubmit}>Log In</button>
            </p>

            <p>OR</p>
            <div className="signup-wrapper">
              <button>
                {" "}
                <img src="assets/images/logo/google.png" /> Sign up with Google
              </button>
              <button>
                {" "}
                <img src="assets/images/logo/facebook.png" />
                Sign Up with Facebook
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Mymodal;
