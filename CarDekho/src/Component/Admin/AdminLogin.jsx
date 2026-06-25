import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AdminLogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState(false);

  const nav = useNavigate();

  function admin(event) {
    event.preventDefault();

    if (email === "admin@gmail.com" && password === "admin@123") {
      nav("/admin");
    } else {
      setmsg(true);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Form
        </h1>

        {msg && (
          <p className="text-red-600 text-center mb-4 font-medium">
            Invalid credentials!!!!
          </p>
        )}

        <form className="space-y-4" onSubmit={admin}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Admin Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        

      </div>
    </div>
  );
}

export default AdminLogin;
