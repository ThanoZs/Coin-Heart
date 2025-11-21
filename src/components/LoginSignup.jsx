import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      alert("Signup successful (placeholder)!");
    } else {
      alert("Login successful (placeholder)!");
    }
  };

  return (
    <div className="login-signup-container">
      <div className="form-box">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p className="switch">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span onClick={handleToggle}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
