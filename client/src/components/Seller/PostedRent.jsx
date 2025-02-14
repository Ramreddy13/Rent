import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostedRent.css'; // Import CSS file

function PostedRent() {
  const [houses, sethouses] = useState([]);

  useEffect(() => {
    axios.get('https://rentnest-server-api.onrender.com/seller/postedRent', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      sethouses(res.data.payload);
      console.log(res.data.payload);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  const deleteHouse = (id) => {
    axios.delete(`https://rentnest-server-api.onrender.com/seller/deleteHouse/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      sethouses(houses.filter(house => house._id !== id));
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="posted-rent-container">
      <h1>Posted Houses</h1>
      {houses.length === 0 ? (
        <p className="no-houses">No houses posted yet.</p>
      ) : (
        <ul className="houses-list">
          {houses.map(house => (
            <li key={house._id} className="house-item">
              <p>Location: {house.location}</p>
              <p>Number of Rooms: {house.NumberOfRooms}</p>
              <p>Rent: ${house.price}</p>
              <button className="delete-button" onClick={() => deleteHouse(house._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostedRent;