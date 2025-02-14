import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './BuyerProfile.css'; // Import CSS file

function BuyerProfile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get('https://rentnest-server-api.onrender.com/buyer/profile', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.status === 200) {
            setUser(res.data.payload);
          } else {
            alert(res.data.message);
            navigate('/buyer-page/login');
          }
        })
        .catch((err) => {
          console.error(err);
          navigate('/buyer-page/login');
        });
    } else {
      navigate('/buyer-page/login');
    }
  }, [navigate]);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Buyer Profile</h1>
        <h2 className="profile-name">
          {user?.firstName} {user?.lastName}
        </h2>
        <h3 className="profile-email">{user?.email}</h3>
      </div>
    </div>
  );
}

export default BuyerProfile;
