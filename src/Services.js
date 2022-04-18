import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./base";

function Services() {
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate("/");
  // };
  return (
    <div className="mainContainer">
      <div className="loginForm">
        <p className="paragraph">This is our Services Page </p>
        <br />
        {/* <button className="btn" onClick={() => goBack()}>
          Go Back
        </button> */}
      </div>
    </div>
  );
}

export default Services;
