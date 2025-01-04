// ShopDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockItems, mockShops } from "../MockData/mockItems";
import ShopCarousel from "./ShopCarousel";


export default function ShopDetails() {
  const { shopId } = useParams(); // Get the shop ID from the URL
  const shopItems = mockItems.filter((item) => item.shopId === parseInt(shopId)); // Filter items by shopId

  // Find the shop details using the shopId
  const shop = mockShops.find((shop) => shop.shopId === parseInt(shopId));

  if (!shop) {
    return <p>Shop not found.</p>;
  }

  if (shopItems.length === 0) {
    return <p>No items found in this shop.</p>;
  }

  return (
    <div className="container">
      <h1 className="mb-4">{shop.name}</h1>
      <div className="row">
        <div className="col-md-6">
        <ShopCarousel key={shop.shopId} shop={shop} />
        </div>
        <div className="col-md-6">
          <p><strong>Description:</strong> {shop.description}</p>
          <p><strong>Location:</strong> {shop.location}</p>
          <p><strong>Contact:</strong> {shop.contact}</p>
        </div>
      </div>

      {/* Items from the Shop Section */}
      <div className="mt-5 categories d-flex flex-wrap justify-content-center mt-4">
        <h2>Items from {shop.name}</h2>
        <div className="row">
          {shopItems.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <Link to={`/product/${item.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
