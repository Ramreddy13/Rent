import React from 'react'
import { Outlet } from 'react-router-dom'
import BuyerLoginContext  from './BuyerLoginContext/BuyerLoginContext'

function BuyerRootLayout() {
  return (
    <div>
      <BuyerLoginContext>
        <Outlet/>
      </BuyerLoginContext> 
    </div>
  )
}

export default BuyerRootLayout