import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/2071692.jpg";

export default function Registration() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const Password = document.getElementById("Password").value;
    const ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (Password === ConfirmPassword) {
      console.log("Registration successful!");
      setErrorMessage("");
    } else {
      setErrorMessage("Password and Confirm Password do not match");
    }
  };

  return (
    <div className="fullscreen-container">
      <img src={backgroundImage} alt="background" />
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="RegisterEmail" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="RegisterEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="Password" />
          </div>
          <div className="mb-3">
            <label htmlFor="ConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" id="ConfirmPassword" />
          </div>
          {errorMessage && (
            <div className="alert alert-warning" role="alert">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
          <p>Already registered?</p>
          <button type="button" className="btn btn-secondary" onClick={handleExploreClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
