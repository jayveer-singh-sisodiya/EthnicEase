import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../Images/2071692.jpg';

export default function Homepage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/CategoriesPage');
  };

  return (
    <div>
      <div className="homepage-container d-flex justify-content-center position-relative">
        <img
          src={image}
          style={{ width: '100%', backgroundColor: 'black' }}
          className="img-fluid"
          alt="background"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 style={{ color: 'white' }}>Welcome</h1>
          <h2 style={{ color: 'white' }}>Welcome 2</h2>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={handleExploreClick}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
