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
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },{
        path:'/buyer-page',
        element:<BuyerRootLayout/>,
        children:[
          {
            path:'/buyer-page',
            element:<BuyerHome/>
          },
          {
            path:'/buyer-page/login',
            element:<LoginBuyer />
          },
          {
            path:'/buyer-page/register',
            element:<RegisterBuyer />
          },
          {
            path:'/buyer-page/dashboard',
            element:<BuyerDashBoard/>
          },
          {
            path:'/buyer-page/profile',
            element:<BuyerProfile/>
          }
        ]
      },{
        path:'/seller-page',
        element:<SellerRootLayout/>,
        children:[
          {
            path:'/seller-page',
            element:<SellerHome/>
          },
          {
            path:'/seller-page/login',
            element:<LoginSeller />
          },
          {
            path:'/seller-page/register',
            element:<RegisterSeller />
          },
          {
            path:'/seller-page/dashboard',
            element:<SellerDashBoard/>
          },
          {
            path:'/seller-page/profile',
            element:<SellerProfile/>
          },
          {
            path:'/seller-page/postRent',
            element:<PostRent/>
          },
          {
            path:'/seller-page/postedRent',
            element:<PostedRent/>
          }
        ]
      },
      {
        path:"/aboutus",
        element:<AboutUs/>
      },
      {
        path:"/contactus",
        element:<ContactUs/>
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
