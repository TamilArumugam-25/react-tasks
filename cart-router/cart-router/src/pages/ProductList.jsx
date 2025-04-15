// src/pages/ProductList.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        const inCart = cartItems.find((item) => item.id === product.id);
        return (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-2"
            />
            <h2 className="font-bold text-sm">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="text-sm text-gray-500 line-clamp-2">
              {product.description}
            </p>
            <div className="mt-auto pt-3">
              {inCart ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white w-full py-1 rounded"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white w-full py-1 rounded"
                >
                  Add to Cart 🛒
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
