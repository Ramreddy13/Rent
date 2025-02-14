import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './PostRent.css'; // Import CSS file

function PostRent() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        axios.post("http://localhost:5000/seller/postRent", data, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res) => {
            alert(res.data.message);
            navigate("/seller/dashboard");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="post-rent-container">
            <form className="post-rent-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Post New House</h1>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input name="location" {...register("location", { required: true })} />
                </div>
                <div className="form-group">
                    <label htmlFor="NumberOfRooms">Number of Rooms</label>
                    <input name="NumberOfRooms" {...register("NumberOfRooms", { required: true })} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Rent</label>
                    <input name="price" {...register("price", { required: true })} />
                </div>
                <div className="form-group">
                    <button className="submit-button" type="submit">Post Rent</button>
                </div>
            </form>
        </div>
    );
}

export default PostRent;