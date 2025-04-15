import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id, removeAll = false) => {
    if (removeAll) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      const updatedCart = cart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      setCart(updatedCart);
    }
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        openCart={() => setIsModalOpen(true)}
      />
      <ProductList products={products} addToCart={addToCart} />
      <CartModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        cartItems={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        totalAmount={totalAmount.toFixed(2)}
      />
    </div>
  );
};

export default App;
