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
  dispatch({ type: types.USER_SIGNUP_ATTEMPT, payload: {} });
  try {
    const user = await axios.post(
      "https://cars-treatments.herokuapp.com/signup",
      {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      }
    );
    if (user.data.success) {
      dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: user });
      history.push("/");
    } else {
      if (user.data.error === 0)
        dispatch({ type: types.USER_SIGNUP_FAILED, payload: 0 });
      else if (user.data.error === 1)
        dispatch({ type: types.USER_SIGNUP_FAILED, payload: 1 });
      else if (user.data.error === 3) {
        dispatch({ type: types.USER_SIGNUP_FAILED, payload: 3 });
        alert("Bad PromoCode!");
      }
    }
  } catch (err) {
    dispatch({ type: types.USER_SIGNUP_FAILED, payload: err });
  }
};

const forgotPass = (email) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://techstar12.herokuapp.com/forgotPass",
      {
        email: email,
      }
    );
    if (response.data.success === true) {
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

const updatePass = (email, oldpass, newpass) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://techstar12.herokuapp.com/updatePass",
      {
        email: email,
        oldpass: oldpass,
        newpass: newpass,
      }
    );
    if (response.data.success === true) {
      dispatch(signout());
      history.push("/");
      alert("Password has been changed successfully, please re-login.");
    } else {
      alert(
        "The old password you have entered is wrong. Password hasn't changed"
      );
    }
  } catch (err) {
    console.log(err);
  }
};

const updateEmail = (oldemail, newemail) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://techstar12.herokuapp.com/updateEmail",
      {
        email: oldemail,
        newemail: newemail,
      }
    );
    if (response.data.success === true) {
      dispatch(signout());
      history.push("/");
      alert(
        "An email has been sent to the original email you had. Please visit your Email box and follow the instructions to approve the change."
      );
    } else {
      alert("We encountered a problem.");
    }
  } catch (err) {
    console.log(err);
  }
};

const approveUser = (userid, token) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://techstar12.herokuapp.com/approve_user",
      {
        userid: userid,
        token: token,
      }
    );
    if (response.data.success === true) {
      history.push("/");
      alert("Your account has been activated successfully. Please login.");
    } else alert("We encountered a problem.");
  } catch (err) {
    console.log(err);
  }
};

const updatePassForgot = (userid, token, newpass) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://techstar12.herokuapp.com/storePassword",
      {
        userid: userid,
        token: token,
        newpass: newpass,
      }
    );
    if (response.data.success === true) {
      history.push("/");
      alert("Password has been changed successfully, please login.");
    } else alert("We encountered a problem.");
  } catch (err) {
    console.log(err);
  }
};

const updateDet =
  (email, first_name, last_name, phonenumber, country, city) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        "https://techstar12.herokuapp.com/updateDet",
        {
          email: email,
          first_name: first_name,
          last_name: last_name,
          phonenumber: phonenumber,
          country: country,
          city: city,
        }
      );
      if (response.data.success == true) {
        alert(
          "Detailes updated successfully!\n You will be able to see all the updates in the next login!"
        );
        //dispatch(signout());
        //history.push('/');
      } else console.log(response.data.status);
    } catch (err) {
      console.log(err);
    }
  };

const signout = () => (dispatch) => {
  cookie.remove("userInstance");
  dispatch({ type: types.USER_SIGNOUT_SUCCESS });
};

export {
  signin,
  signup,
  signout,
  forgotPass,
  updatePass,
  updateDet,
  updatePassForgot,
  approveUser,
  updateEmail,
};
