import './App.css';
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import BuyerHome from './components/Buyer/BuyerHome';
import RegisterBuyer from './components/Buyer/RegisterBuyer';
import LoginBuyer from './components/Buyer/LoginBuyer';
import Home from './components/Home';
import RootLayout from './components/RootLayout';
import BuyerRootLayout from './components/Buyer/BuyerRootLayout';
import SellerRootLayout from './components/Seller/SellerRootLayout';
import SellerHome from './components/Seller/SellerHome';
import LoginSeller from './components/Seller/LoginSeller';
import RegisterSeller from './components/Seller/RegisterSeller';
import SellerDashBoard from './components/Seller/SellerDashBoard';
import BuyerDashBoard from './components/Buyer/BuyerDashBoard';
import BuyerProfile from './components/Buyer/BuyerProfile';
import SellerProfile from './components/Seller/SellerProfile';
import PostRent from './components/Seller/PostRent';
import PostedRent from './components/Seller/PostedRent';

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/buyer',
        element:<BuyerRootLayout/>,
        children:[
          {
            path:'/buyer',
            element:<BuyerHome/>
          },
          {
            path:'/buyer/login',
            element:<LoginBuyer />
          },
          {
            path:'/buyer/register',
            element:<RegisterBuyer />
          },
          {
            path:'/buyer/dashboard',
            element:<BuyerDashBoard/>
          },
          {
            path:'/buyer/profile',
            element:<BuyerProfile/>
          }
        ]
      },{
        path:'/seller',
        element:<SellerRootLayout/>,
        children:[
          {
            path:'/seller',
            element:<SellerHome/>
          },
          {
            path:'/seller/login',
            element:<LoginSeller />
          },
          {
            path:'/seller/register',
            element:<RegisterSeller />
          },
          {
            path:'/seller/dashboard',
            element:<SellerDashBoard/>
          },
          {
            path:'/seller/profile',
            element:<SellerProfile/>
          },
          {
            path:'/seller/postRent',
            element:<PostRent/>
          },
          {
            path:'/seller/postedRent',
            element:<PostedRent/>
          }
        ]
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
