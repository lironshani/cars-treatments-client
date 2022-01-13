import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./signup.css";
import ReCAPTCHA from "react-google-recaptcha";
import { signup } from "../redux/actions/authActions";
import Alert from "react-bootstrap/Alert";

function SignUpComponent(props) {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [promo, setPromo] = useState("");
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [callback, setCallback] = useState("not fired");
  const [value, setValue] = useState("[empty]");
  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState("false");
  const recaptchaRef = React.createRef();
  const errorFromServer = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      ValidateEmail(Email.toLowerCase()) &&
      checkPwd(password) &&
      checkNames(Firstname) &&
      checkNames(Lastname)
    ) {
      if (value != "[empty]") {
        if (password === password1) {
          dispatch(signup(Email.toLowerCase(), password, Firstname, Lastname));
          alert("We sent you an email about your sign-up");
        } else {
          alert("The passwords do not match");
          return false;
        }
      } else {
        alert("You have to verify the Recaptcha!");
        return false;
      }
    }
  };

  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
        mail
      )
    )
      return true;
    else if (
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?:\.[a-zA-Z0-9-]+)$/.test(
        mail
      )
    )
      return true;
    alert("You have entered an invalid email address!");
    return false;
  }

  function checkPwd(str) {
    if (str.length < 6) {
      alert("Too short");
      return false;
    } else if (str.search(/\d/) === -1) {
      alert("No num");
      return false;
    } else if (str.search(/[a-zA-Z]/) === -1) {
      alert("no chars");
      return false;
    }
    return true;
  }

  function checkNames(str) {
    if (str.length < 1) {
      alert("Too short");
      return false;
    } else if (str.search(/[a-zA-Z]/) === -1) {
      alert("no chars");
      return false;
    } else if (str.search(/[0-9]/) !== -1) {
      alert("you cannot write number at your name");
      return false;
    }
    return true;
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setValue(value);
    if (value == null) setExpired(true);
  }

  return (
    <div>
      <div id="SignUpcontainer">
        <div className="row justify-content-center">
          <div id="SignUp">
            <form onSubmit={handleSubmit}>
              {errorFromServer === 0 && (
                <Alert variant="danger">
                  Email is already used. Please write another email address.
                </Alert>
              )}
              <p id="title">Sign Up</p>
              <input
                id="Firstname"
                type="text"
                className="form-control fix-rounded-right"
                required
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                aria-label="Fullname"
                aria-describedby="basic-addon1"
              ></input>
              <div className="invalid-feedback">Please choose a Firstname.</div>
              <input
                id="Lastname"
                type="text"
                className="form-control fix-rounded-right"
                required
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                aria-label="Lastname"
                aria-describedby="basic-addon1"
              ></input>
              <div className="invalid-feedback">Please choose a username.</div>
              <input
                id="email"
                type="text"
                className="form-control fix-rounded-right"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                aria-label="user name or email"
                aria-describedby="basic-addon1"
              ></input>
              <div className="invalid-feedback">Please choose a email.</div>
              <input
                id="password2"
                type="password"
                className="form-control fix-rounded-right"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                aria-label="password:"
                aria-describedby="basic-addon2"
              ></input>
              <div className="invalid-feedback">
                Please enter your password.
              </div>
              <input
                id="password3"
                type="password"
                className="form-control fix-rounded-right"
                required
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="ReEnter Password"
                aria-label="password:"
                aria-describedby="basic-addon2"
              ></input>
              <div className="invalid-feedback">
                Please enter your password.
              </div>
              <div className="row">
                <button className="Signup-btn" type="submit">
                  Signup
                </button>
              </div>
              <div className="row">
                <div className="need-acc-txt">
                  {" "}
                  Have an account? <a href="/SignIn">Sign-In</a>
                </div>
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                secretkey="6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"
                onChange={onChange}
                id="my_captcha_form"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpComponent;
