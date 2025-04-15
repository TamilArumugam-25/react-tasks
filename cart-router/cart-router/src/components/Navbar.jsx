// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-blue-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">
        🛍️ MyShop
      </Link>
      <Link to="/cart" className="font-medium">
        Cart 🛒 ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
