// components/CartModal.jsx
import React from "react";

const CartModal = ({
  isOpen,
  closeModal,
  cartItems,
  removeFromCart,
  addToCart,
  totalAmount,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg overflow-auto max-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
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
                  <p className="text-sm text-gray-500">Unit: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 px-2 text-white rounded"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-500 px-2 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm mt-1">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id, true)}
                className="bg-gray-400 px-2 py-1 text-sm rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="text-right font-bold text-lg mt-4">
          Total: ${totalAmount}
        </div>
        <button
          onClick={closeModal}
          className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
