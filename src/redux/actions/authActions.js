import axios from "axios";
import cookie from "js-cookie";
import * as types from "../types";
import { history } from "../../history";

const setCookie = (name, value, days = 7, path = "/") => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=" +
    path;
};

function signin(email, password, remember) {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users/login`, {
        email,
        password,
      })
      .then(function (response) {
        if (response.status === 200) {
          dispatch({
            type: types.SET_TOKEN_USER,
            ...response.data,
          });
          if (remember) {
            setCookie("jwt", response.data.token, 365);
          }
          history.push("/");
        } else {
        }
      })
      .catch(function (error) {
        console.log("error: ", error);
        dispatch({ type: types.USER_SIGNIN_FAILED, payload: error });
      });
  };
}

const signup = (email, password, firstname, lastname) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/users/register`,
      {
        email: email,
        password: password,
        first_name: firstname,
        last_name: lastname,
      }
    );
    if (response.status === 200) {
      history.push("/sign-in");
    }
  } catch (err) {
    if (err.response.data.error === "email-exists")
      alert("Email already exists!");
    else console.log(err);
  }
};

const forgotPass = (email) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/users/forgot`,
      {
        email: email,
      }
    );
    if (response.status === 200) {
      alert(
        "A recovery email has been sent to the email you specified. Please visit your Email box and follow the instructions."
      );
    } else {
      alert("This email is not recognized.");
    }
  } catch (err) {
    console.log(err);
  }
};

const updatePassForgot = (token, newpass) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/users/reset`,
      {
        new_password: newpass,
      },
      { headers: { authorization: "Bearer " + token } }
    );
    if (response.status === 200) {
      history.push("/sign-in");
    }
    // if (response.data.success === true) {
    //   history.push("/");
    //   alert("Password has been changed successfully, please login.");
    // } else alert("We encountered a problem.");
  } catch (err) {
    console.log(err);
  }
};

const signout = () => (dispatch) => {
  cookie.remove("userInstance");
  dispatch({ type: types.USER_SIGNOUT_SUCCESS });
};

export { signin, signup, signout, forgotPass, updatePassForgot };
