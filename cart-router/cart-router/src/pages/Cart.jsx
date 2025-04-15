// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountedTotal = total - total * 0.1;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between mb-4 border-b pb-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>${item.price.toFixed(2)} each</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-500 text-white px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm bg-gray-400 px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="text-right mt-4 font-bold">
          <p>Subtotal: ${total.toFixed(2)}</p>
          <p className="text-green-600">10% Discount: -${(total * 0.1).toFixed(2)}</p>
          <p className="text-xl">Total: ${discountedTotal.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
