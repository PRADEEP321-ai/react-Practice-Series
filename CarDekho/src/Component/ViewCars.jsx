import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewCars() {
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

  // Add to cart function
  function addCart(car) {
    const cart = { car };

    axios
      .post("http://localhost:8081/cart", cart)
      .then((res) => {
        console.log(res.data);

        if (res.data === "car is added to the cart") {
          alert("Car Added to Cart ✅");
        }
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
              className="mt-4 bg-amber-800 text-white py-2 px-4 rounded-xl hover:bg-amber-900 transition cursor-pointer"
              onClick={() => addCart(car)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      
    </div>
    
  );
}

export default ViewCars;
