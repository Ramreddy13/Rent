import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function BuyerProfile() {
    let [user,setUser]=useState({});
    const navigate=useNavigate();
    useEffect(() => {
    const token =localStorage.getItem("token")
    if(token!==undefined){
        axios.get('http://localhost:5000/buyer/profile',{
            headers: {Authorization:`Bearer ${token}`}
        })
        .then((res)=>{
            if(res.status===200)
            setUser({...res.data.payload});
            else{
                alert(res.data.message)
            navigate('/buyer/login')
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    else{
        navigate('/buyer/login');
    }
    },[])
  return (
    <div>
        <h1>Buyer Profile</h1>
        <h2>{user.firstName} {user.lastNName}</h2>
        <h2>{user.email}</h2>
    </div>
  )
}

export default BuyerProfile