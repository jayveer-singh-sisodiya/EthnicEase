import React from "react";
import PropTypes from "prop-types";

export default function ProductCarousel({ product = [] }) {
  const imageKeys = Object.keys(product).filter((key) => key.startsWith("image"));
  const images = imageKeys.map((key) => product[key]);

  return (
    <div className="product-carousel" style={{ width: "100%" }}>

      <div id={`carousel-${product.id}`} className="carousel slide">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target={`#carousel-${product.id}`}
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              style={{
                width: "50px",
                height: "50px",
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
                border: "2px solid lavender",
                margin: "5px",
              }}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((url, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={url}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carousel-${product.id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carousel-${product.id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

ProductCarousel.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image1: PropTypes.string,
    image2: PropTypes.string,
    image3: PropTypes.string,
    image4: PropTypes.string,
    image5: PropTypes.string,
  }).isRequired,
};
