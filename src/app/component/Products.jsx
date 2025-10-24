"use client";

import React from "react";
import { motion } from "framer-motion";
import { useStore } from "../component/store";
import { useRouter } from "next/navigation";

const Products = () => {
  const { products } = useStore();
  const router = useRouter();

  const goTo = (path) => {
    router.push(path);
  };

  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Product Grid with animation container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between bg-white"
          >
            <div className="w-full h-84 mb-3 overflow-hidden rounded-md">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }} // zoom-in on hover
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-1">{product.description}</p>
              <p className="text-blue-600 font-bold mt-1">${product.price}</p>
              <p className="text-yellow-500 mt-1">
                Rating: {product.rating} ({product.reviews} reviews)
              </p>
              <p
                className={`mt-1 ${
                  product.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-2 mt-3 rounded text-white transition duration-300 ${
                product.inStock
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!product.inStock}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Cart Button */}
      <motion.button
        onClick={() => goTo("/cart")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 px-4 py-2 bg-black text-white rounded-lg shadow-lg z-50 cursor-pointer"
      >
        🛒 Cart
      </motion.button>
    </>
  );
};

export default Products;
