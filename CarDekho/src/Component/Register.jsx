import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  let {register, handleSubmit, reset}=useForm()

  let nav = useNavigate()

  function adduser(user){
    axios.post("http://localhost:8081/user", user).then((res)=>{
      console.log(res.data);
      
      if(res.data == "Registration Succesfull"){
        nav("/login")
        reset()
      }
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600 px-4">
      
      <div className="bg-white w-96 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
        
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join us and start your journey 🚗
        </p>

        <form className="space-y-4" onSubmit={handleSubmit(adduser)}>
          <div>
            <input
            {...register("name")}
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
            />
          </div>

          <div>
            <input
            {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
            />
          </div>

          <div>
            <input
            {...register("password")}
              type="password"
              placeholder="Create Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
            />
          </div>

          <div>
            <input
            {...register("contact")}
              type="number"
              placeholder="Contact Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-md"
          >
            Register
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
