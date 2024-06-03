import React,{useContext} from 'react'
import {useForm} from 'react-hook-form';
import {LoginContext} from './BuyerLoginContext/LoginContext'

function LoginBuyer() {
  const {register, handleSubmit} = useForm();
  const [currentUser,error,loginStatus,Login,LogOut]=useContext(LoginContext)
  const formSubmit=(userObj)=>{
    Login(userObj)
  }
  return (
    <div>
      <h1>Buyer Login</h1>
      {error.length!==0 && <p>{error}</p>}
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

export default LoginBuyer