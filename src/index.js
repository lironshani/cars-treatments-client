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
import SignUp from "./Views/SignUpView";
import SignIn from "./Views/SignInView";
import Welcome from "./components/Welcome/Welcome";
import AboutUs from "./components/AboutUs/AboutUS";
import ResetPassword from "./Views/ResetPasswordView";
import ForgotPassword from "./Views/ForgotPasswordView";

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
              <p>Dashboard</p>
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
          <Route path="/reset-password/:userid/:token">
            <ResetPassword />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
