import React,{useContext} from 'react'
import {useForm} from 'react-hook-form'; 
import { LoginContext } from './SellerLoginContext/LoginContext';

function LoginSeller() {
  const [currentUser,error,loginStatus,Login,LogOut]=useContext(LoginContext)
  const {register, handleSubmit} = useForm();
  
  const formSubmit=(userObj)=>{
    if(error.length>0) {
      alert(error)
    }
    Login(userObj)
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