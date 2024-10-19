import React from 'react'
import { useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function PostRent() {
    const navigate=useNavigate();
    const { register, handleSubmit} = useForm()
    const onSubmit = async (data) => {
        axios.post("http://localhost:5000/seller/postRent",data,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            alert(res.data.message);
            navigate("/seller/dashboard");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <h1>Post New House</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="location">Location</label>
                <input name="location" {...register("location",{ required: true })} />
            </div>
            <div>
                <label htmlFor="NumberOfRooms">Number of Rooms</label>
                <input name="NumberOfRooms" {...register("NumberOfRooms",{ required: true })} />
            </div>
            <div>
                <label htmlFor="price">Rent</label>
                <input name="price" {...register("price",{ required: true })} />
            </div>
            <div>
                <button type="submit">Post Rent</button>
            </div>
        </form>
    </div>
  )
}

export default PostRent