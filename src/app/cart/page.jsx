"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // 🌀 Add AnimatePresence

const CartPage = () => {
  const router = useRouter();
  const goTo = (path) => router.push(path);

  // 🛒 Use State for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 49.99 },
    { id: 3, name: "Product 3", price: 19.99 },
  ]);

  // 🗑️ Function to remove items with animation
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartEmpty = cartItems.length === 0;

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🛍️ Animated Header */}
      <motion.h1
        className="text-4xl font-bold mb-4 text-blue-700"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your Shopping Cart
      </motion.h1>

      {/* 🛒 If Cart Empty */}
      {cartEmpty ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 max-w-2xl mb-6">
            Your cart is empty. Browse our products and add something awesome!
          </p>
          <motion.button
            onClick={() => goTo("/products")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-300"
          >
            Continue Shopping
          </motion.button>
        </motion.div>
      ) : (
        /* 🧩 Cart Items List */
        <motion.div
          className="w-full max-w-2xl bg-white p-6 rounded shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex justify-between items-center border-b py-3 text-gray-700"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <div>
                  <span className="font-medium">{item.name}</span>
                  <p className="text-blue-600 font-semibold">${item.price}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded transition"
                >
                  Remove
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* 🧾 Checkout Section */}
          <motion.div
            className="mt-6 text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: cartItems.length * 0.1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CartPage;
