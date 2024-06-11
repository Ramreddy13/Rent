import React from 'react'
import { Outlet } from 'react-router-dom'
import SellerLoginContext  from './SellerLoginContext/SellerLoginContext'

function SellerRootLayout() {
  return (
    <div>
      <SellerLoginContext>
        <Outlet />
      </SellerLoginContext>
    </div>
  )
}

export default SellerRootLayout