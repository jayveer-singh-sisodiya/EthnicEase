import React from "react";
import PropTypes from "prop-types";

export default function Carousel({ images = [] }) {
  const buttonStyle = {
    width: "75px",
    height: "35px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "2px solid lavender",
    borderRadius: "5px",
    margin: "10px",
  };

  if (!images.length) {
    return <p>No images available for the carousel.</p>;
  }

  return (
    <div className="attractive-deals" style={{ width: "100%" }}>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
              style={{ ...buttonStyle, backgroundImage: `url(${image.url})` }}
            ></button>
          ))}
        </div>

        <div className="carousel-inner" style={{ width: "100%" }}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image.url}
                className="d-block w-100"
                alt={image.alt || `Slide ${index + 1}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{image.label || `Slide ${index + 1} Label`}</h5>
                <p>{image.description || `Description for slide ${index + 1}`}</p>
                <hr />
                <br />
              </div>
            </div>
          ))}
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
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
        index: PropTypes.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
