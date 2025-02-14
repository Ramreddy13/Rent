import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerHome.css'; // Import CSS file

function BuyerHome() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the Buyer Portal</h1>
        <p>
          Discover amazing deals, rent properties with ease, and manage your rentals all in one place.
          Sign up or log in to get started!
        </p>
        <div className="button-group">
          <button className="buyer-button register" onClick={() => navigate('/buyer-page/register')}>
            Register
          </button>
          <button className="buyer-button login" onClick={() => navigate('/buyer-page/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyerHome;
