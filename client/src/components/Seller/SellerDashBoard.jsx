import React from 'react'
import { useForm } from 'react-hook-form'
function SellerDashBoard() {
    const { register, handleSubmit} = useForm()
    const onSubmit = async (data) => {
        // const response = await fetch('/seller', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // });
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="location">Location</label>
                <input name="location" ref={register({ required: true })} />
            </div>
            <div>
                <label htmlFor="No. of Room">Number of Rooms</label>
                <input name="No. of Room" ref={register({ required: true })} />
            </div>
            <div>
                <label htmlFor="price">Rent</label>
                <input name="price" ref={register({ required: true })} />
            </div>
            <div>
                <button type="submit">Post Rent</button>
            </div>
        </form>
    </div>
  )
}

export default SellerDashBoard