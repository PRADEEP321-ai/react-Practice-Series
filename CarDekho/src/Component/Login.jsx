import React, { use, useState } from "react";
import Register from "./Register";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let [email, setemail] = useState();
  let [password, setpassword] = useState();
  let [msg, setmsg] = useState(false);

  let nav = useNavigate();
  

  function loginUser(event) {
    event.preventDefault();

    axios
      .get(`http://localhost:8081/user/${email}/${password}`)
      .then((res) => {
        if (res.data == "Registration Successfull") {
          nav("/");
        } else {
          setmsg(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600 px-4">
      <div className="bg-white w-96 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Login Account
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join us and start your journey 🚗
        </p>
        {msg && <p style={{ color: "red" }}>Invalid Credentials!!!</p>}

        <form className="space-y-4" onSubmit={loginUser}>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        <p className="ml-20">Login As a <Link to="/adminlogin" className=" text-blue-600 font-semibold hover:underline ">Admin Login</Link></p>
      </div>
    </div>
  );
}

export default Login;
