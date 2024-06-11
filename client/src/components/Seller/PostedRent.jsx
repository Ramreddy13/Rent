import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function PostedRent() {
  const [houses,sethouses] =useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/seller/postedRent',{
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res)=>{
      sethouses(res.data.payload);
      console.log(res.data.payload);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  const deleteHouse = (id) => {
    axios.delete(`http://localhost:5000/seller/deleteHouse/${id}`,{
      headers:{
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      }
      
    })
   .then((res)=>{
     sethouses(houses.filter(house => house._id!== id));
     alert(res.data.message);
   })
   .catch((err) => {
     console.log(err);
   })
  }
  return (
    <div>
      <h1>Posted Houses</h1>
        {houses.length === 0 ? (
          <p>No houses posted yet.</p>
        ) : (
          <ul>
            {houses.map(house => (
              <li key={house._id}>
                <p>Location: {house.location}</p>
                <p>Number of Rooms: {house.NumberOfRooms}</p>
                <p>Rent: ${house.price}</p>
                <button onClick={() => deleteHouse(house._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default PostedRent