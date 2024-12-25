import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { mockItems } from "../MockData/mockItems";

export default function LandingPage() {
  const { category } = useParams(); // Get category from the URL
  const [searchQuery, setSearchQuery] = useState("");

  // Log category and mockItems for debugging
  useEffect(() => {
    console.log("Category from URL:", category);
    console.log("Available Items:", mockItems);
  }, [category]);

  // Filter items based on category and search query
  const filteredItems = mockItems.filter(
    (item) =>
      item.category.toLowerCase() === category?.toLowerCase() &&
      item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">{category} Items</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Items */}
      <div className="row">
  {filteredItems.length > 0 ? (
    filteredItems.map((item) => (
      <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div className="card">
          <img src={item.image} alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">
              <strong>Price:</strong> ${item.price}
            </p>
            <Link to={`/ProductDetails/${item.id}`} className="btn btn-primary">
              View Product Details
            </Link>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="col-12">
      <p className="text-center">No items found.</p>
    </div>
  )}


      </div>
    </div>
  );
}
