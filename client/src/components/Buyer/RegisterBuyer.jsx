import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterBuyer.css'; // Import CSS file

function RegisterBuyer() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const formSubmit = (userObj) => {
    axios
      .post("https://rentnest-server-api.onrender.com/buyer/register", userObj)
      .then((res) => {
        console.log(res.data.message);
        if (res.status === 200) {
          navigate("/buyer-page/login");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Buyer Registration</h1>

        <form onSubmit={handleSubmit(formSubmit)} className="register-form">
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
  );
}

export default RegisterBuyer;
