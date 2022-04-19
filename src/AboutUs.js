import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function About() {
  // const navigate = useNavigate();
  // const goBack = () => {
  //   navigate("/");
  // };
  return (
    <div className="mainContainer">
      <div className="loginForm">
        <p className="paragraph">This is the About Us Page </p>
        <br />
        {/* <button className="btn" onClick={() => goBack()}>
          Go Back
        </button> */}
      </div>
    </div>
  );
}
export default About;
