import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault(); // Prevent form submission reload
    const Password = document.getElementById("Password").value;
    const ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (Password === ConfirmPassword) {
      handleClickRegister();
      setErrorMessage(""); // Clear the error message if passwords match
    } else {
      setErrorMessage("Password and Confirm Password do not match"); // Set the error message
    }
  };

  const handleClickRegister = () => {
    console.log("Registration successful!");
    // Add registration logic here
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="RegisterEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="RegisterEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
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
        <p>IF ALREADY LOGGED IN</p>
        <button type="button" className="btn btn-primary" onClick={handleExploreClick}>
          Login
        </button>
      </form>
    </div>
  );
}
