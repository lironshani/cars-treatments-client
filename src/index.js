import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { history } from "./history";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUS";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import ResetPassword from "./components/ResetPassword/ResetPassComp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassComp";
import axios from "axios";
import NotFound from "./components/WrongPath/NotFound";

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
};

const token = getCookie("jwt");

export default function PrivateRoute({ children, ...rest }) {
  const user = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/welcome",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/">
              <Redirect
                to={{
                  pathname: "/dashboard",
                }}
              />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <App>
                <Dashboard />
              </App>
            </PrivateRoute>
            <PrivateRoute path="/about-us">
              <App>
                <AboutUs></AboutUs>
              </App>
            </PrivateRoute>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/reset-password/:token">
              <ResetPassword />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (token) {
  axios
    .get(`${process.env.REACT_APP_SERVER_URL}/users/get-user`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      if (response.status === 200) {
        store.dispatch({
          type: "SET_TOKEN_USER",
          token,
          user: response.data,
        });
      } else {
      }
      render();
    })
    .catch(function (error) {
      console.log("error: ", error);
    });
} else {
  render();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
