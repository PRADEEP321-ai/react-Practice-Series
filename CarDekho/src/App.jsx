import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import ViewCars from "./Component/ViewCars";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Cart from "./Component/Cart";

import AdminLogin from "./Component/Admin/AdminLogin";
import AdminNav from "./Component/Admin/AdminNav";
import AHome from "./Component/Admin/AHome";
import Addcars from "./Component/Admin/Addcars";
import AdminViewCar from "./Component/Admin/AdminViewCar";
import EditCar from "./Component/Admin/EditCar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>

      {/* -------- Admin Routes -------- */}
      <Route path="/adminlogin" element={<AdminLogin />} />

      <Route path="/admin" element={<AdminNav />}>
        <Route index element={<AHome />} />
        <Route path="addcars" element={<Addcars />} />
        <Route path="viewcars" element={<AdminViewCar />} />
        <Route path="editcars/:id" element={<EditCar />} />
      </Route>

      {/* -------- User Routes -------- */}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="viewcars" element={<ViewCars />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

    </Routes>
  );
}

export default App;
