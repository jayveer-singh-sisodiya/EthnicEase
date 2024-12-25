// ProductDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockItems} from "../MockData/mockItems";


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
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="img-fluid" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Tags:</strong> {product.tags.join(", ")}</p>
      <p><strong>Shop Name:</strong> {product.shopName}</p>
      <p><strong>Shop ID:</strong> {product.shopId}</p>

      {/* Similar Items Section */}
      <div className="mt-5">
        <h2>Similar Items</h2>
        <div className="row">
          {similarItems.length > 0 ? (
            similarItems.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <strong>Price:</strong> ${item.price}
                    </p>
                    <Link to={`/product/${item.id}`} className="btn btn-primary">
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
      <div className="mt-5">
        <h2>Items from {product.shopName}</h2>
         {/* Navigate to Shop Details Page */}
      <Link to={`/ShopDetails/${product.shopId}`} className="btn btn-info mb-3">
        View More from {product.shopName}
      </Link>
        <div className="row">
          {shopItems.length > 0 ? (
            shopItems.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <strong>Price:</strong> ${item.price}
                    </p>
                    <Link to={`/product/${item.id}`} className="btn btn-primary">
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