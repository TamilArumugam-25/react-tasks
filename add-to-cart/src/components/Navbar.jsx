import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow p-4 flex justify-between items-center text-white">
      <h1 className="text-xl font-bold">🛍️ Shoppyee</h1>
      <button
        onClick={openCart}
        className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200 flex items-center gap-2"
      >
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
