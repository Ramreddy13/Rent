import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rents.css'; // Import the CSS file

function Rents() {
    const [houses, setHouses] = useState([]);
    const [seller, setSeller] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [housesPerPage] = useState(8);

    useEffect(() => {
        axios.get('http://localhost:5000/buyer/rents', {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => {
            setHouses(res.data.payload);
            console.log(res.data.payload);
        })
        .catch(err => console.error(err));
    }, []);

    function fetchSellerDetails(id) {
        axios.get(`http://localhost:5000/buyer/sellerDetails/${id}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => {
            setSeller(res.data.payload);
            alert(`Seller Details:\nName: ${res.data.payload.firstName}\nEmail: ${res.data.payload.email}`);
            console.log(res.data.payload);
        })
        .catch(err => console.error(err));
    }

    // Pagination logic
    const indexOfLastHouse = currentPage * housesPerPage;
    const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
    const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);
    const totalPages = Math.ceil(houses.length / housesPerPage);

    return (
        <div className="rents-container">
            <h1 className="rents-title">Available Houses</h1>
            <ul className="houses-list">
                {currentHouses.map(house => (
                    <li key={house._id} className="house-item">
                        <p><strong>Location:</strong> {house.location}</p>
                        <p><strong>Rooms:</strong> {house.NumberOfRooms}</p>
                        <p><strong>Rent:</strong> ${house.price}</p>
                        <button className="details-button" onClick={() => fetchSellerDetails(house.sellerId)}>View Seller Details</button>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Rents;
