import axios from "axios";
import cookie from "js-cookie";
import * as types from "../types";
import { history } from "../../history";

function signin(email, password) {
  return (dispatch) => {
    dispatch({ type: types.USER_SIGNIN_ATTEMPT, payload: {} });
    axios
      .post("https://techstar12.herokuapp.com/signin", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.success === true) {
          dispatch({ type: types.USER_SIGNIN_SUCCESS, payload: response });
          cookie.set("userInstance", JSON.stringify(response));
          history.push("/");
        } else {
          dispatch({ type: types.USER_SIGNIN_FAILED, payload: 0 });
          if (response.data.error === 1) {
            dispatch({ type: types.USER_SIGNIN_FAILED, payload: 1 });
            alert(
              "Your account is still disabled. You need to activate it using the URL we sent to your Email."
            );
          }
        }
      })
      .catch(function (error) {
        dispatch({ type: types.USER_SIGNIN_FAILED, payload: error });
      });
  };
}

const signup = (email, password, firstname, lastname) => async (dispatch) => {
  // dispatch({ type: types.USER_SIGNUP_ATTEMPT, payload: {} });
  // console.log(email, password, firstname, lastname);
  try {
    const response = await axios.post("http://localhost:5000/users/register", {
      email: email,
      password: password,
      first_name: firstname,
      last_name: lastname,
    });
    if (response.status === 200) {
      history.push("/sign-in");
    }
    // if (user.data.success) {
    //   dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: user });
    //   history.push("/");
    // } else {
    //   if (user.data.error === 0)
    //     dispatch({ type: types.USER_SIGNUP_FAILED, payload: 0 });
    //   else if (user.data.error === 1)
    //     dispatch({ type: types.USER_SIGNUP_FAILED, payload: 1 });
    //   else if (user.data.error === 3) {
    //     dispatch({ type: types.USER_SIGNUP_FAILED, payload: 3 });
    //     alert("Bad PromoCode!");
    //   }
    // }
  } catch (err) {
    if (err.response.data.error === "email-exists")
      alert("Email already exists!");
    else console.log(err);

    // dispatch({ type: types.USER_SIGNUP_FAILED, payload: err });
  }
};

const forgotPass = (email) => async (dispatch) => {
  try {
    const response = await axios.put("http://localhost:5000/users/forgot", {
      email: email,
    });
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
      "http://localhost:5000/users/reset",
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
