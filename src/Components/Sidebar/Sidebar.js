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
      <div className="links-list">
        <ul>
          <li>
            <Link className="link" to="/dashboard">
              dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/about-us">
              about-us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
