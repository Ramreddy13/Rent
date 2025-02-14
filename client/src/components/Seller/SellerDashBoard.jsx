import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerDashBoard.css'; // Import CSS file

function SellerDashBoard() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    <h1>Seller Dashboard</h1>
                </div>
                <button className="profile-button" onClick={() => navigate('/seller/profile')}>
                    Profile
                </button>
            </div>
            <div className="dashboard-container">
                <div className="description">
                    <p>Manage your listings, connect with buyers, and streamline your selling process.</p>
                </div>
                <div className="card">
                    <h2>Post New Rent</h2>
                    <button className="card-button" onClick={() => navigate('/seller/postRent')}>
                        Post New Rent
                    </button>
                </div>
                <div className="card">
                    <h2>Posted Rent</h2>
                    <button className="card-button" onClick={() => navigate('/seller/postedRent')}>
                        View Posted Rent
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SellerDashBoard;