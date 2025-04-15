import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between h-full">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
        <h2 className="text-sm font-semibold mb-2">{product.title}</h2>
        <p className="text-lg font-bold text-green-600 mb-2">${product.price}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2 mt-4"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
