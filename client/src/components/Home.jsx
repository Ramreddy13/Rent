import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';  // Import the CSS file for styling

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar1">
        <div className="navbar1-logo">
          <h1>RentNest</h1>
        </div>
        <div className="navbar1-links">
          <button onClick={() => navigate('/aboutus')}>About Us</button>
          <button onClick={() => navigate('/contactus')}>Contact Us</button>
        </div>
      </nav>

      {/* Buyer Container */}
      <div className="home-container1">
        <div className="card left-card">
          <div className="left-section">
            <h1>For Tenants</h1>
            <p>Find your next home from trusted landlords. Explore rental listings and get the best offers.</p>
            <button onClick={() => { navigate('/buyer-page') }} className="home-button">Tenant</button>
          </div>
        </div>
        {/* Seller Container */}
        <div className="card right-card">
          <div className="right-section">
            <h1>For Landlords</h1>
            <p>Manage your properties, connect with tenants, and find the right people for your rentals.</p>
            <button onClick={() => { navigate('/seller-page') }} className="home-button">Landlord</button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 RentNest. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
