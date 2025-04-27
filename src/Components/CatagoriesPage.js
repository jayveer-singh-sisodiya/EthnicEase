import React from "react";

import mockCategories from "../MockData/mockCategories";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import carouselImages from "../MockData/MockImageCarousel";

export default function CategoriesPage() {
  return (
    
    <div>
    <Carousel images={carouselImages} />
      {/* Categories Section */}
      <div className="categories d-flex flex-wrap justify-content-center mt-4">
        {mockCategories.map((category) => (
          <div
            key={category.id}
            className="card m-3"
            style={{ width: "18rem" }}
          >
            <img
              src={category.image}
              className="card-img-top"
              alt={category.title}
            />
            <div className="card-body">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>
              <Link to={`/Landingpage/${category.title}`}className="btn btn-primary">
                Explore
              </Link>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
