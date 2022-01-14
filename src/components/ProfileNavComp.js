import React, { useEffect, useState } from "react";
import { history } from "../history";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import avatar from "../images/avatar.png";
import cookie from "js-cookie";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
function ProfileNavComp(props) {
  const userInstance = cookie.get("userInstance");
  const dispatch = useDispatch();
  if (userInstance) {
    const user = JSON.parse(userInstance);
    console.log(user);
    function onClickPc() {
      history.push("/Constraction");
    }

    return (
      <div className="newDiv">
        <Button className="btn" variant="primary" onClick={onClickPc}>
          Buy PC
        </Button>
        <Button className="btn" variant="primary" onClick={onClickPc}>
          Buy Cellphone
        </Button>
        <img className="avatar" src={avatar} alt="profile picture"></img>
        <Dropdown className="user-instance">
          <Dropdown.Toggle id="dropdown-basic">
            Hello {user.data.user.first_name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
            <Dropdown.Item
              href="/"
              onClick={() => {
                // dispatch(signout());
              }}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  } else {
    return (
      <form className="form-inline my-2 my-lg-0">
        <a
          href="/Signin"
          className="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Sign In
        </a>
        <a
          href="/Signup"
          className="btn btn-secondary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Sign Up
        </a>
      </form>
    );
  }
}
export default ProfileNavComp;
