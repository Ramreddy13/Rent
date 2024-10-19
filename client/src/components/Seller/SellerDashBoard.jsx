import React from 'react'
import { useNavigate } from 'react-router-dom'
function SellerDashBoard() {
    const navigate=useNavigate()
    
  return (
    <div>
        <button type="button" onClick={()=>{navigate('/seller/profile')}}>Profile</button>
        <button type="button" onClick={()=>{navigate('/seller/postRent')}}>Post New Rent</button>
        <button type="button" onClick={()=>{navigate('/seller/postedRent')}}>Posted Rent</button>
    </div>
  )
}

export default SellerDashBoard