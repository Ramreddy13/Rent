import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom' 
import '../Buyer/RegisterBuyer.css';
function RegisterSeller() {
  const navigate=useNavigate();
  const {register, handleSubmit} = useForm();
  const onSubmit =(userObj) => {
    axios.post("http://localhost:5000/seller/register",userObj)
    .then((res)=>{
      console.log(res.data.message);
      if(res.status===200){
        navigate("/seller/login");
      }
      else if(res.status===201){
        alert(res.data.message);
        navigate("/seller/login");
      }
      else{
        alert(res.data.message);
      }
    })
    console.log(userObj);
    
  }
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Seller Registration</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <div className="input-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" {...register("firstName", { required: true })} />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" {...register("lastName", { required: true })} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email", { required: true })} />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register("password", { required: true })} />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
          </div>

          <div className="button-group">
            <button type="submit" className="register-button">Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterSeller