import React, { useEffect, useState } from "react";
import history from "../../history";
import { useDispatch, useSelector } from "react-redux";
import "../ForgotPassword/ForgotPassComp.css";
import ReCAPTCHA from "react-google-recaptcha";
import { forgotPass } from "../../redux/actions/authActions";

function ForgotPasswordComponent(props) {
  const [Email, setEmail] = useState("");
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();
  const [value, setValue] = useState("[empty]");
  const [expired, setExpired] = useState("false");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ValidateEmail(Email.toLowerCase()) && value != "[empty]") {
      dispatch(forgotPass(Email.toLowerCase()));
    } else {
      alert("You have to verify the Recaptcha!");
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

  function onChange(value) {
    console.log("Captcha value:", value);
    setValue(value);
    if (value == null) setExpired(true);
  }

  return (
    <div>
      <div id="ForgotContainer">
        <div className="row justify-content-center">
          <div id="Forgot">
            <div className="col login-left">
              <form onSubmit={handleSubmit}>
                <p id="title">Reset Password</p>
                <input
                  id="email"
                  type="text"
                  className="form-control fix-rounded-right"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Email Address"
                  aria-label="email Address"
                  aria-describedby="basic-addon1"
                ></input>
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
                <div className="row">
                  <button className="Signup-btn" type="submit">
                    Reset Password
                  </button>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn"
                  onChange={onChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPasswordComponent;
