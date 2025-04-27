import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Images/2071692.jpg";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registration() {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [extraFields, setExtraFields] = useState({
    name: "",
    role: "",
    address: "",
    phone: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/login");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!isModalOpen) {
      if (password === confirmPassword && email) {
        setErrorMessage("");

        const modal = new window.bootstrap.Modal(document.getElementById("extraFieldsModal"));
        modal.show();
        setIsModalOpen(true);
      } else {
        setErrorMessage("Password and Confirm Password must match and Email must be filled!");
      }
    } else {
      try {
        const payload = {
          userId: 0,
          email,
          password,
          name: extraFields.name,
          role: extraFields.role,
          address: extraFields.address,
          phone: extraFields.phone
        };

        console.log("Submitting to API:", payload);

        const response = await axios.post("https://localhost:44326/api/User/register", payload);

        if (response.status === 200) {
          alert("Registration successful!");
          navigate("/login");
        }
      } catch (error) {
        console.error("Full error object:", error);
        if (error.response) {
          console.error("Validation Errors:", error.response.data.errors);
          const errors = error.response.data.errors;
          const firstError = errors && Object.values(errors)[0][0];
          alert(firstError || "Registration failed.");
        } else {
          alert("Something went wrong!");
        }
      }
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
            <input
              type="email"
              className="form-control"
              id="RegisterEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="ConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <div className="alert alert-warning" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary" onClick={handleRegister}>
            {isModalOpen ? "Submit Registration" : "Register"}
          </button>

          <p>Already registered?</p>
          <button type="button" className="btn btn-secondary" onClick={handleExploreClick}>
            Login
          </button>
        </form>
      </div>

      {/* Modal for extra fields */}
      <div className="modal fade" id="extraFieldsModal" tabIndex="-1" aria-labelledby="extraFieldsModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="extraFieldsModalLabel">Additional Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={extraFields.name}
                  onChange={(e) => setExtraFields({ ...extraFields, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <select
                  id="role"
                  className="form-select"
                  value={extraFields.role}
                  onChange={(e) => setExtraFields({ ...extraFields, role: e.target.value })}
                >
                  <option value="">Select Role</option>
                  <option value="user">User</option>
                  <option value="shopkeeper">Shopkeeper</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={extraFields.address}
                  onChange={(e) => setExtraFields({ ...extraFields, address: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={extraFields.phone}
                  onChange={(e) => setExtraFields({ ...extraFields, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="modal-footer">
              {/* Close button */}
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
