import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigate('/buyer')}}>Buyer</button>
        <button onClick={()=>{navigate('/seller')}}>Seller</button>
    </div>
  )
}

export default Home