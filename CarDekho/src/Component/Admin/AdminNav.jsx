import React from "react";
import { Link, Outlet } from "react-router-dom";
function AdminNav() {
  return (
    <div>
      <nav className="bg-slate-800 py-4 shadow-md">
        <h1 className="text-red-700">CarDekho</h1>
        <ul className="flex justify-center gap-10 text-white text-lg font-medium">
          <li>
            <Link
              to="/admin"
              className="px-4 py-2 rounded-md hover:bg-sky-400 hover:text-black transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="addcars"
              className="px-4 py-2 rounded-md hover:bg-sky-400 hover:text-black transition duration-300"
            >
              Add Cars
            </Link>
          </li>

          <li>
            <Link
              to="viewcars"
              className="px-4 py-2 rounded-md hover:bg-sky-400 hover:text-black transition duration-300"
            >
              View Cars
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default AdminNav;
