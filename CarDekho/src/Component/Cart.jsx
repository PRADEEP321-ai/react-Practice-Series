import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [carts, setCarts] = useState([]);

  // Fetch all carts
  const fetchCarts = () => {
    axios
      .get("http://localhost:8081/carts")
      .then((res) => {
        console.log(res.data);
        
        setCarts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  // Remove a cart item
  const remove = (id) => {
    axios
      .delete(`http://localhost:8081/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data === "car is Deleted") {
          fetchCarts(); // refresh cart list
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">My Cart</h1>

      {carts.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carts.map((cart, index) => (
            <div
              key={cart.cartid}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={cart.car.image}
                alt={`${cart.car.brand} ${cart.car.model}`}
                className="h-40 w-40 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{cart.car.brand}</h2>
              <h3 className="text-md text-gray-600">{cart.car.model}</h3>
              <p className="mt-2 text-gray-800 font-medium">
                Price: ${cart.car.price}
              </p>
              <button
                onClick={() => remove(cart.cartid)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
