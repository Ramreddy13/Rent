import React from 'react'
import { useNavigate } from 'react-router-dom'
function SellerHome() {
    const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-content">
      <h1>Welcome to the Seller Portal</h1>
      <p>
          Manage your listings, connect with buyers, and streamline your selling process.
          Sign up or log in to get started!
      </p>
      <div className="button-group">
          <button className="buyer-button register" onClick={() => navigate('/seller/register')}>
              Register
          </button>
          <button className="buyer-button login" onClick={() => navigate('/seller/login')}>
              Login
          </button>
          </div>
      </div>
    </div>
  )
}

export default SellerHome