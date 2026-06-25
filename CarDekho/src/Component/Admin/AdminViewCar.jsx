import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminViewCar() {
  const [cars, setCars] = useState([]);

  // Fetch all cars
  useEffect(() => {
    axios
      .get("http://localhost:8081/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let nav = useNavigate();

  function editcar(id) {
    nav(`/admin/editcars/${id}`);
  }

  // Delete car function
  function deletecar(carId) {
    axios
      .delete(`http://localhost:8081/car/${carId}`)
      .then((res) => {
        console.log(res.data);
        setCars(cars.filter(car => car.id !== carId));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-blue-200 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        View Cars
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <img
              src={car.image}
              alt={car.model}
              className="h-48 w-full object-contain mb-4"
            />

            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              {car.model}
            </h2>

            <p className="text-gray-700">
              <span className="font-medium">Brand:</span> {car.brand}
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Price:</span> Rs. {car.price}
            </p>

            <p className="text-gray-700">
              <span className="font-medium">Color:</span> {car.color}
            </p>


             <button
              className="mt-4 bg-green-500  text-white py-2 px-4 rounded-xl hover:bg-green-900 transition cursor-pointer"
              onClick={() => editcar(car.id)}
            >
              Edit
            </button>

            <button
              className="mt-4 ml-4 bg-amber-700 text-white py-2 px-4 rounded-xl hover:bg-amber-900 transition cursor-pointer"
              onClick={() => deletecar(car.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminViewCar;
