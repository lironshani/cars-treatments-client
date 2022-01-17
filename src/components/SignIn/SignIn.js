import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions/authActions";
import "../SignIn/SignIn.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function SignInComponent(props) {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [value, setValue] = useState("[empty]");
  const [expired, setExpired] = useState("false");
  const dispatch = useDispatch();
  const errorFromServer = useSelector((state) => state.error);
  const recaptchaRef = React.createRef();
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      ValidateEmail(Email.toLowerCase()) &&
      checkPwd(password) &&
      value != "[empty]"
    ) {
      dispatch(signin(Email.toLowerCase(), password, remember));
    } else {
      alert("You have to verify the Recaptcha !");
      return false;
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

  function onChange(value) {
    console.log("Captcha value:", value);
    setValue(value);
    if (value == null) setExpired(true);
  }

  return (
    <div className="signin-container">
      <div id="SignIncontainer">
        <div className="row justify-content-center">
          <div id="SignIn">
            <form onSubmit={handleSubmit} autoComplete="on">
              {errorFromServer === 0 && (
                <Alert variant="danger">
                  Email and\or password are incorrect!
                </Alert>
              )}
              <p id="title">Sign In To Your Account</p>
              <div className="email-field">
                <input
                  id="email-signin"
                  type="text"
                  className="form-control fix-rounded-right"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user name or email"
                  aria-label="user name or email"
                  aria-describedby="basic-addon1"
                ></input>
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
              <div className="password-field">
                <input
                  id="pass-signin"
                  type="password"
                  className="form-control fix-rounded-right"
                  required
                  placeholder="password:"
                  aria-label="password:"
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby="basic-addon2"
                ></input>
                <div className="invalid-feedback">
                  Please enter your password.
                </div>
              </div>
              <div className="remember">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="row">
                <a id="forgot" href="/forgot-password">
                  Forgot password?
                </a>
              </div>
              <div className="row">
                <button className="SignInButton" type="submit">
                  Sign-In
                </button>
              </div>
              <div className="row">
                <div className="need-acc-txt">
                  Don't have an account? <a href="/sign-up">Sign-Up</a>{" "}
                </div>
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LehBBoeAAAAADTacWITp-3whe262HABRPq6nTvw"
                onChange={onChange}
              />
            </form>
            <div className="back">
              <a href="/welcome">Back to main page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInComponent;
