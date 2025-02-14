import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../Buyer/BuyerProfile.css'
function SellerProfile() {
    let [user,setUser]=useState({});
    const navigate=useNavigate();
    useEffect(() => {
    const token =localStorage.getItem("token")
    if(token!==undefined){
        axios.get('http://localhost:5000/seller/profile',{
            headers: {Authorization:`Bearer ${token}`}
        })
        .then((res)=>{
            if(res.status===200){
                console.log(res.data.payload);
            setUser({...res.data.payload});
            }
            else{
                alert(res.data.message)
                navigate('/seller/login')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else{
        navigate('/seller/login');
    }
    },[navigate])
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Seller Profile</h1>
        <h2 className="profile-name">
          {user?.firstName} {user?.lastName}
        </h2>
        <h3 className="profile-email">{user?.email}</h3>
      </div>
    </div>
  )
}

export default SellerProfile