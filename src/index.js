import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { history } from "./history";
import SignUp from "./Views/SignUpView";
import ApproveView from "./Views/ApproveView";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/activate/:userid/:token" component={ApproveView} />
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
