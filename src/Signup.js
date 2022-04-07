import React, { useState } from "react";
import { auth, db } from "./base";
// import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            firstName: firstName,
            lastName: lastName,
            email: email,
          });
        })
        .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  };

  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="mainContainer">
      <form className="signupForm" onSubmit={handleSubmit}>
        <input
          placeholder="first name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        ></input>
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        ></input>
        <button className="btn">Sign Up</button>
        <button className="btn" onClick={() => goBack()}>
          Go Back
        </button>
      </form>
    </div>
  );
};

export default SignUp;
