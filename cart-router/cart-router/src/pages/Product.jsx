import React, { useEffect, useState } from "react";

const Products = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 w-full object-contain mb-2"
          />
          <h2 className="font-bold text-sm">{product.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <p className="font-semibold mt-2">${product.price}</p>
          {isInCart(product.id) ? (
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full mt-2 bg-red-500 text-white py-2 rounded"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="w-full mt-2 bg-blue-500 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
