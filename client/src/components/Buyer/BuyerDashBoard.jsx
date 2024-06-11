import React from 'react'
import { useNavigate } from 'react-router-dom'

function BuyerDashBoard() {
  const navigate=useNavigate();
  return (
    
    <div>
      <button type="button" onClick={()=>{navigate('/buyer/profile')}}>Profile</button>
      
      
    </div>
  )
}

export default BuyerDashBoard