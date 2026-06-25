import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

const EditCar = () => {

    let {register, handleSubmit, reset} = useForm();

    let[msg, setMsg] = useState(false)
    let nav = useNavigate();

    let {id} = useParams();

    function addcar(car){
        axios.put(`http://localhost:8081/car/${id}`, car).then((res) => {
            console.log(res.data);
            if(res.data == "Car is updated"){
                nav("/admin/viewcars")
            }
        }).catch((err) => {
            console.log(err);
            
        })
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Edit Cars</h2>
        {msg && <p className="text-green-500 text-center mb-4">Car is added</p>}

        <form onSubmit={handleSubmit(addcar)} className="space-y-4">
          
          <input
          {...register("brand")}
            type="text"
            name="brand"
            placeholder="Brand"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />

          <input
          {...register("model")}
            type="text"
            name="model"
            placeholder="Model"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />

          <input
          {...register("price")}
            type="number"
            name="price"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />

          <input
          {...register("color")}
            type="text"
            name="color"
            placeholder="Colour"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
            required
          />

          <input
          {...register("image")}
            type="text"
            name="image"
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition duration-300"
          >
            Update Car
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditCar
