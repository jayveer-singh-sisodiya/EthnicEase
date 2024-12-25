import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Login from './Components/Login'; // Import the Login component
import Registration from './Components/Registration';
import CatagoriesPage from './Components/CatagoriesPage';
import Landingpage from './Components/Landingpage';
import ProductDetails from './Components/ProductDetails';
import ShopDetails from './Components/ShopDetails';
import UserDashboard from './Components/UserDashboard'; // Import UserDashboard
import ShopDashboard from './Components/ShopDashboard'; // Import ShopDashboard

function App() {
  const [role, setRole] = useState("guest"); // 'guest', 'user', 'shopkeeper'

  // Handle role change (this would typically happen during login)
  const setUserRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <Router>
      <Navbar role={role} setUserRole={setUserRole} /> {/* Pass role and setUserRole to Navbar */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for Homepage */}
        <Route path="/login" element={<Login setUserRole={setUserRole} />} /> {/* Route for Login */}
        <Route path="/registration" element={<Registration />} /> {/* Route for Registration */}
        <Route path="/CategoriesPage" element={<CatagoriesPage />} /> {/* Route for CategoriesPage */}
        <Route path="/Landingpage/:category" element={<Landingpage />} /> {/* Route for LandingPage */}
        <Route path="/ProductDetails/:id" element={<ProductDetails />} /> {/* Product details route */}
        <Route path="/ShopDetails/:shopId" element={<ShopDetails />} /> {/* Shop details route */}

        {/* Role-based routes */}
        {role === "user" && <Route path="/user-dashboard" element={<UserDashboard />} />}
        {role === "shopkeeper" && <Route path="/shop-dashboard" element={<ShopDashboard />} />}
        
      </Routes>
    </Router>
  );
}

export default App;
