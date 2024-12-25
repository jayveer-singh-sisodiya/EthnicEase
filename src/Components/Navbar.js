import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ role, setUserRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserRole("guest");  // Set the role to 'guest' when logging out
    navigate("/");  // Redirect to the homepage
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          EthnicEase
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="/CategoriesPage">
                Categories
              </Link>
            </li>

            {/* Role-specific navigation */}
            {role === "guest" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">
                    Register
                  </Link>
                </li>
              </>
            )}

            {role === "user" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/user-dashboard">
                    User Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {role === "shopkeeper" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop-dashboard">
                    Shop Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
