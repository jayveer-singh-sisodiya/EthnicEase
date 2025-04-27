import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../Images/2071692.jpg";

export default function Login({ setUserRole }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleExploreClick = () => {
    navigate("/registration");
  };

  const handleClickLogin = async () => {
    if (email && password) {
      try {
        const response = await axios.post("https://localhost:44326/api/User/login", {
          email,
          password
        });        
        if (response.status === 200) {
          const userData = response.data.user;
          console.log("Login successful:", userData);
  
          setUserRole(userData.role);
          localStorage.setItem("user", JSON.stringify(userData));
  
          console.log("Navigating based on role:", userData.role);
  
          if (userData.role === "user") {
            navigate("/user-dashboard");
          } else if (userData.role === "shopkeeper") {
            navigate("/shop-dashboard");
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        alert(error.response?.data || "Login failed. Please check your credentials.");
      }
    } else {
      alert("Please enter email and password!");
    }
  };
  
  return (
    <div className="fullscreen-container">
      <img src={backgroundImage} alt="background" />
      <div className="form-container">
        <h2>Login</h2>

        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby="passwordHelpBlock"
          />
        </div>

        {/* Role selection dropdown - OPTIONAL for registration, not needed for login */}
        {/* Keeping it only if you want to register */}
        <div className="mb-3">
          <label htmlFor="roleSelect" className="form-label">
            Select Role (Optional for Registration)
          </label>
          <select
            id="roleSelect"
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
