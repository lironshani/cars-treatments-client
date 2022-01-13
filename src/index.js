import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { history } from "./history";
import SignUp from "./Views/SignUpView";
import ApproveView from "./Views/ApproveView";
import Welcome from "./components/Welcome/Welcome";

function PrivateRoute({ children, ...rest }) {
  const auth = { user: false };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
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
          {/* <Route path="/activate/:userid/:token" component={ApproveView} /> */}
          <PrivateRoute exact path="/">
            <App />
          </PrivateRoute>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/sign-up">
            <SignUp />
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
