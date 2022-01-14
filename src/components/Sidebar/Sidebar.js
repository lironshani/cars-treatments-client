import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import "../Sidebar/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="container">
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
      </div>
    </div>
  );
}
