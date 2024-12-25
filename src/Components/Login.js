import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/2071692.jpg"; // Update this path to match your project structure

export default function Login({ setUserRole }) {
  const navigate = useNavigate();
  const [role, setRole] = useState(""); // State for the selected role

  const handleExploreClick = () => {
    navigate("/registration");
  };

  const handleClickLogin = () => {
    const email = document.querySelector("input[placeholder='Email']").value;
    const password = document.getElementById("inputPassword5").value;

    // Check if role, email, and password are provided
    if (role && email && password) {
      console.log("Login successful with role: " + role);
      setUserRole(role); // Set the user role in the parent component (App.js)

      // Redirect to different dashboards based on role
      if (role === "user") {
        navigate("/user-dashboard");
      } else if (role === "shopkeeper") {
        navigate("/shop-dashboard");
      } else {
        navigate("/"); // For guests, redirect to the homepage or any default page
      }
    } else {
      alert("Please select a role and enter valid email and password!");
    }
  };

  return (
    <div className="fullscreen-container">
      {/* Background Image */}
      <img src={backgroundImage} alt="background" />
      {/* Login Form */}
      <div className="form-container">
        <h2>Login</h2>

        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            aria-label="Email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
        </div>

        {/* Role Selection Dropdown */}
        <div className="mb-3">
          <label htmlFor="roleSelect" className="form-label">
            Select Role
          </label>
          <select
            id="roleSelect"
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)} // Update role state when selection changes
          >
            <option value="">Choose a role</option>
            <option value="user">User</option>
            <option value="shopkeeper">Shopkeeper</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary" onClick={handleClickLogin}>
          Login
        </button>

        <p>If not registered yet?</p>
        <button type="button" className="btn btn-secondary" onClick={handleExploreClick}>
          Register
        </button>
      </div>
    </div>
  );
}
