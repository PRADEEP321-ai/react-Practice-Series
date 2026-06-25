import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
    <nav className="bg-slate-800 py-4 shadow-md">
      <h1 className="text-red-700">CarDekho</h1>
      <ul className="flex justify-center gap-10 text-white text-lg font-medium">
        <li>
          <Link to="/" className="px-4 py-2 rounded-md hover:bg-sky-400 hover:text-black transition duration-300">
            Home
          </Link>
        </li>



        <li>
          <Link to="/viewcars" className="px-4 py-2 rounded-md hover:bg-sky-400 hover:text-black transition duration-300">
            View Cars
          </Link>
        </li>

        <li>
          <Link to="/cart" className="px-4 py-2 rounded-md hover:bg-sky-400 hover:text-black transition duration-300">
            Cart
          </Link>
        </li>

        <li>
          <Link to="/login" className="px-4 py-2 ml-50 rounded-md bg-green-500 hover:bg-green-600 transition duration-300">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register" className="px-4 py-2  rounded-md bg-blue-500 hover:bg-blue-600 transition-duration-300">
            Register
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  );
}

export default Navbar;
