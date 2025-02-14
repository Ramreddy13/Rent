import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyerDashBoard.css';
import Rents from './Rents';

function BuyerDashBoard() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>RentNest</h1>
        </div>
        <button className="profile-button" type="button" onClick={() => navigate('/buyer-page/profile')}>
          Profile
        </button>
      </nav>
        
          <Rents />
    </div>
  );
}

export default BuyerDashBoard;
