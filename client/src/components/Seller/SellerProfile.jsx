import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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
    <div>
        <h1>seller Profile</h1>
        <h2>{user.firstName} {user.lastNName}</h2>
        <h2>{user.email}</h2>
    </div>
  )
}

export default SellerProfile