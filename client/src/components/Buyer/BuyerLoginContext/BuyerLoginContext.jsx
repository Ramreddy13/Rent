import React, { Children, useState } from 'react'
import { LoginContext } from "./LoginContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function BuyerLoginContext({children}) {
    let [currentUser,setCurrentUser]=useState({});
    let [error,setError]=useState("");
    let [loginStatus,setLoginStatus]=useState(false);
    let navigate=useNavigate();
    const Login=(userObj)=>{
      console.log(userObj)
        axios.post("http://localhost:5000/buyer/login",userObj)
        .then(res=>{
        if(res.status===200){
            setCurrentUser({...res.data.payload});
            setLoginStatus(true);
            localStorage.setItem("token",res.data.token);
            navigate("/buyer/dashboard");
        }
        else{
            setError(res.data.message)
        }
        })
        .catch(err=>{
          setError("error while login please try again")
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

export default BuyerLoginContext