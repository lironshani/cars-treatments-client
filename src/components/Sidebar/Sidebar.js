import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import "../Sidebar/Sidebar.css";
import { history } from "../../history";

const logout = () => {
  document.cookie = "jwt" + "=; Max-Age=-99999999;";
  history.push("/welcome");
};
export default function Sidebar() {
  return (
    <div className="sidebar-container ">
     <meta name="viewport" content="width=device-width,initial-scale=0.5" />
      <img src="/logo.png" className="sidebar-image" />
      <span className="sidebar-divider"></span>
      <div className="links-list">
        <ul>
          <li className="sidebar-link">
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="sidebar-link">
            <Link className="link" to="/about-us">
              About Us
            </Link>
          </li>
        </ul>
        <div className="logout">
          <div onClick={logout}>Logout</div>
        </div>
      </div>
    </div>
  );
}
