import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from './BuyerLoginContext/LoginContext';
import './LoginBuyer.css'; // Import CSS file

function LoginBuyer() {
  const { register, handleSubmit } = useForm();
  const [ currentUser,error,loginStatus,Login,LogOut] = useContext(LoginContext);

  const formSubmit = (userObj) => {
    if (error.length > 0) {
      alert(error);
    }
    Login(userObj);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Buyer Login</h1>

        <form onSubmit={handleSubmit(formSubmit)} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" {...register("email", { required: true })} />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password :</label>
            <input type="password" id="password" {...register("password", { required: true })} />
          </div>

          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginBuyer;
