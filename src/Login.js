import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { auth } from "./base";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/");
    }
    onRegister();
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="mainContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="btn">Login</button>
        <button className="btn" onClick={() => goBack()}>
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Login;
