import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login"; 
import Registration from "./Components/Registration";
import CatagoriesPage from "./Components/CatagoriesPage";
import Landingpage from "./Components/Landingpage";
import ProductDetails from "./Components/ProductDetails";
import ShopDetails from "./Components/ShopDetails";
import UserDashboard from "./Components/UserDashboard";
import ShopDashboard from "./Components/ShopDashboard";
import './App.css';
import Carousel from "./Components/Carousel";
import CreateProduct from "./Components/CreateProduct";

// Create a context to provide shop details
export const ShopContext = createContext();

function App() {
  const [role, setRole] = useState("guest"); // 'guest', 'user', 'shopkeeper'
  const [shopDetails, setShopDetails] = useState({
    shopName: "",
    description: "",
    products: [],
  });

  // Handle role change (this would typically happen during login)
  const setUserRole = (newRole) => {
    setRole(newRole);
  };

  return (
    <ShopContext.Provider value={{ shopDetails, setShopDetails }}>
      <Router>
        <Navbar role={role} setUserRole={setUserRole} /> {/* Pass role and setUserRole to Navbar */}
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Route for Homepage */}
          <Route path="/login" element={<Login setUserRole={setUserRole} />} /> {/* Route for Login */}
          <Route
            path="/registration"
            element={<Registration setUserRole={setUserRole} setShopDetails={setShopDetails} />}
          /> {/* Route for Registration */}
          <Route path="/CategoriesPage" element={<CatagoriesPage />} /> {/* Route for CategoriesPage */}
          <Route path="/Landingpage/:category" element={<Landingpage />} /> {/* Route for LandingPage */}
          <Route path="/ProductDetails/:id" element={<ProductDetails />} /> {/* Product details route */}
          <Route path="/ShopDetails/:shopId" element={<ShopDetails />} /> {/* Shop details route */}
          <Route path="/CreateProduct" element={<CreateProduct />} /> {/* Shop details route */}




          

        {/* need to be changed or remove*/}
          <Route path="/testingpage1" element={<Carousel />} /> {/*carosal testing pagee*/}
          {/* Role-based routes */}







          {role === "user" && <Route path="/user-dashboard" element={<UserDashboard />} />}
          {role === "shopkeeper" && <Route path="/shop-dashboard" element={<ShopDashboard />} />}
        </Routes>
      </Router>
    </ShopContext.Provider>
  );
}

export default App;
