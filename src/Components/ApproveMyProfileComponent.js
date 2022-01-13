import React, { useEffect, useState } from "react";
import history from "../history";
import { useDispatch, useSelector } from "react-redux";
import "../Components/approve.css";
import { approveUser } from "../Actions/autAction";

function ApproveMyProfileComponent(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(approveUser(props.userid, props.token));
  });
  return (
    <div>
      <div id="approveContainer">
        <div className="row justify-content-center">
          <div id="aprrov">
            <div>
              <p id="title">Your account has been created!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ApproveMyProfileComponent;
