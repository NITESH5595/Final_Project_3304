import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";
import { AuthProvider } from "./AuthProvider";
import About from "./AboutUs";
import Services from "./Services";
import Customers from "./Customers";
import Weather from "./Weather";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/customers" element={<Customers />} />
          <Route exact path="/weather" element={<Weather />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
