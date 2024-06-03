import React from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom' 
function RegisterSeller() {
  const navigate=useNavigate();
  const {register, handleSubmit} = useForm();
  const onSubmit =(userObj) => {
    axios.post("http://localhost:5000/seller/register",userObj)
    .then((res)=>{
      console.log(res.message);
      if(res.status===200){
        navigate("/seller/login");
      }
      else{
        alert(res.message);
      }
    })
    console.log(userObj);
    
  }
  return (
    <div>
      <h1>Seller Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label htmlFor="firstName">First Name :</label>
        <input type="text" id="firstName" {...register("firstName", {required: true})} />
        </div>
        <div>
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" id="lastName" {...register("lastName", {required: true})} />
        </div>
        <div>
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" {...register("email", {required: true})} />
        </div>
        <div>
        <label htmlFor="password">Password :</label>
        <input type="password" id="password" {...register("password", {required: true})} />
        </div>
        <div>
        <label htmlFor="confirmPassword">Confirm Password :</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword", {required: true})} />
        </div>
        <div>
        <button type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterSeller