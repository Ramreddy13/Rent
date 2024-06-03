import React from 'react'
import axios from 'axios';
import {useForm} from 'react-hook-form'; 
import {useNavigate} from 'react-router-dom' 
function LoginSeller() {
  const navigate=useNavigate();
  const {register, handleSubmit} = useForm();
  const formSubmit=(userObj)=>{
    axios.post("http://localhost:5000/seller/login",userObj)
    .then(res=>{
      console.log(res.message);
      if(res.status===200){
        navigate("/seller/dashboard");
      }
      else{
        alert(res.message);
      }
    })
    console.log(userObj);
    

  }
  return (
    <div><h1>Seller Login</h1>
    <form onSubmit={handleSubmit(formSubmit)}>
    <div>
      <label htmlFor="email">Email :</label>
      <input type="email" id="email" {...register("email", {required: true})} />
      </div>
      <div>
      <label htmlFor="password">Password :</label>
      <input type="password" id="password" {...register("password", {required: true})} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    </div>
  )
}

export default LoginSeller