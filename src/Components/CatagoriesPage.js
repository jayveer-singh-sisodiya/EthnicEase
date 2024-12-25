import React from "react";
import image1 from "../Images/1.jpg";
import image2 from "../Images/3.png";
import image3 from "../Images/744325.jpg";
import mockCategories from "../MockData/mockCategories";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
  return (
    <div>
      {/* Carousel Section */}
      <div className="attractive-deals" style={{ width: "100%" }}>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" style={{ width: "100%" }}>
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First Slide Label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image2} className="d-block w-100" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second Slide Label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={image3} className="d-block w-100" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third Slide Label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

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
