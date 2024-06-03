import React from 'react'
import { useNavigate } from 'react-router-dom'
function SellerHome() {
    const navigate = useNavigate();
  return (
    <div>
       <h1>SellerHome</h1>
       <button type="button" onClick={()=>{navigate('/seller/register')}}>Register</button>
       <button type="button"  onClick={()=>{navigate('/seller/login')}}>Login</button>
    </div>
  )
}

export default SellerHome