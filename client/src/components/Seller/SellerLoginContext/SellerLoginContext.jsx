import React, { useState } from 'react'
import { LoginContext } from "./LoginContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SellerLoginContext({children}) {
    let [currentUser,setCurrentUser]=useState({});
    let [error,setError]=useState("");
    let [loginStatus,setLoginStatus]=useState(false);
    let navigate=useNavigate();
    const Login=(userObj)=>{
      console.log(userObj)
        axios.post("https://rentnest-server-api.onrender.com/seller/login",userObj)
        .then(res=>{
        if(res.status===200){
            setCurrentUser({...res.data.payload});
            setLoginStatus(true);
            localStorage.setItem("token",res.data.token);
            navigate("/seller/dashboard");
            setError("");
        }
        else{
            setError(res.data.message  || "Login failed. Please check your credentials.")
        }
        })
        .catch(err=>{
            console.error("Error during login:", err);
            setError("An unexpected error occurred. Please try again later.");
        })
    }
    const LogOut=()=>{
      setLoginStatus(false)
      localStorage.clear();
    }
  return (
    <div>
        <LoginContext.Provider value={[currentUser,error,loginStatus,Login,LogOut]}>
          {children}
        </LoginContext.Provider>
    </div>
  )
}

export default SellerLoginContext