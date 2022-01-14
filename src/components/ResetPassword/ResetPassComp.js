import React, { useEffect, useState } from "react";
import history from "../../history";
import { useDispatch, useSelector } from "react-redux";
import "../ResetPassword/ResetPassComp.css";
import { updatePassForgot } from "../../redux/actions/authActions";
import ReCAPTCHA from "react-google-recaptcha";

function UpdatePasswordComponent(props) {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const dispatch = useDispatch();
  const recaptchaRef = React.createRef();
  const [value, setValue] = useState("[empty]");
  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState("false");

  function onClickUpdate() {
    if (value != "[empty]") {
      if (checkPwd(password)) {
        if (password === password1)
          dispatch(updatePassForgot(props.userid, props.token, password));
        else alert("The passwords do not match");
      }
    } else {
      alert("You have to verify the Recaptcha!");
      return false;
    }
  }

  function checkPwd(str) {
    if (str.length < 6) alert("Too short");
    else if (str.search(/\d/) == -1) alert("No num");
    else if (str.search(/[a-zA-Z]/) == -1) alert("Password must contain chars");
    return true;
  }

  function onChange(value) {
    setValue(value);
    if (value == null) setExpired(true);
  }

  return (
    <div>
      <div id="UpdatePasswordcontainer">
        <div className="row justify-content-center">
          <div id="UpdatePassword">
            <div>
              <p id="title">Update Password</p>
              <input
                id="passu"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control fix-rounded-right"
                required
                placeholder="Enter Password"
                aria-label="password:"
                aria-describedby="basic-addon2"
              ></input>
              <div className="invalid-feedback">
                Please enter your password.
              </div>
              <input
                id="passu2"
                type="password"
                onChange={(e) => setPassword1(e.target.value)}
                className="form-control fix-rounded-right"
                required
                placeholder="Re-enter Password"
                aria-label="password:"
                aria-describedby="basic-addon2"
              ></input>
              <div className="invalid-feedback">
                Please enter your password.
              </div>
              <div className="row">
                <button className="Signup-btn" onClick={onClickUpdate}>
                  Update Password
                </button>
              </div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Ldn5DEaAAAAALYRhCaGFStvoKGWXRUxuBJVNPrn"
                onChange={onChange}
                id="my_captcha_form"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UpdatePasswordComponent;
