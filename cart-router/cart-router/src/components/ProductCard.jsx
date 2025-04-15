import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const isInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />
      <h2 className="text-sm font-semibold mb-1">{product.title}</h2>
      <p className="text-green-600 font-bold text-lg mb-2">${product.price}</p>
      <p className="text-xs text-gray-600 mb-4 line-clamp-2">{product.description}</p>

      {isInCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-500 text-white py-2 rounded w-full font-semibold transition hover:bg-red-600"
        >
          ❌ Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white py-2 rounded w-full font-semibold transition hover:bg-blue-600"
        >
          🛒 Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
