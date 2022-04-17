import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "./base";
import { signOut } from "firebase/auth";
import { AuthContext } from "./AuthProvider";
// import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import "./index.css";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/login");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };
  const aboutus = () => {
    navigate("/about");
  };
  const services = () => {
    navigate("/services");
  };
  const customers = () => {
    navigate("/customers");
  };
  const weather = () => {
    navigate("/weather");
  };

  var myCurrentDate = new Date();
  var date =
    myCurrentDate.getFullYear() +
    "-" +
    (myCurrentDate.getMonth() + 1) +
    "-" +
    myCurrentDate.getDate() +
    " " +
    myCurrentDate.getHours() +
    ":" +
    myCurrentDate.getMinutes() +
    ":" +
    myCurrentDate.getSeconds();
  const newCurrentDate = date;

  return (
    <div className="mainContainer">
      {currentUser && (
        <div>
          <div className="navbar">
            <ul className="menu">
              <li className="item">
                <button className="menuBtn" onClick={aboutus}>
                  About Us
                </button>
                {/* <a href={<AboutUs />}>About Us</a> */}
              </li>
              <li className="item">
                <button className="menuBtn" onClick={services}>
                  Our Services
                </button>
              </li>
              <li className="item">
                <button className="menuBtn" onClick={customers}>
                  Our Customers
                </button>
              </li>
            </ul>
          </div>
          <div className="main">
            <h1>Welcome {username}</h1>
            <h3>Time and Date</h3>

            <div className="date">
              Current Date and Time
              <br />
              {newCurrentDate}
            </div>
            <div>
              <button onClick={weather} className="btn">
                Weather
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="buttons">
        <button onClick={clickLogin} className="btn">
          {currentUser ? "Log Out" : "Login"}
        </button>
        {!currentUser && (
          <button onClick={clickSignup} className="btn">
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
