// ProductDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockItems } from "../MockData/mockItems";

export default function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const product = mockItems.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  // Filter similar items based on the same category
  const similarItems = mockItems.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  // Filter items from the same shop
  const shopItems = mockItems.filter(
    (item) => item.shopId === product.shopId && item.id !== product.id
  );

  return (
    <div className="container " >
      <h1 className="mb-4">{product.name}</h1>
      <div className="row" style={{height:"600px"}}>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid mb-4"
          />
        </div>
        <div className="col-md-6">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
          <p><strong>Shop Name:</strong> {product.shopName}</p>
          <p><strong>Shop ID:</strong> {product.shopId}</p>
        </div>
      </div>

      {/* Similar Items Section */}
      <div className="mt-5">
        <h2>Similar Items</h2>
        <div className="row categories d-flex flex-wrap justify-content-center mt-4">
          {similarItems.length > 0 ? (
            similarItems.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <Link to={`/ProductDetails/${item.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No similar items found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Items from the Same Shop Section */}
      <div className="mt-5 ">
        <h2>Items from {product.shopName}</h2>
        <Link to={`/ShopDetails/${product.shopId}`} className="btn btn-info mb-3">
          View More from {product.shopName}
        </Link>
        <div className="row categories d-flex flex-wrap justify-content-center mt-4">
          {shopItems.length > 0 ? (
            shopItems.map((item) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card">
                  <img src={item.image} alt={item.name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <Link to={`/ProductDetails/${item.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No items found from this shop.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
