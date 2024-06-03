import React from 'react'
import { useNavigate } from 'react-router-dom'
function BuyerHome() {
    const navigate = useNavigate();
  return (
    <div>
       <h1>Home</h1>
       <button type="button" onClick={()=>{navigate('/buyer/register')}}>Register</button>
       <button type="button"  onClick={()=>{navigate('/buyer/login')}}>Login</button>

    </div>
  )
}

export default BuyerHome