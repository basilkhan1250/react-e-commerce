"use client";

import React from "react";
import { useStore } from "../../component/store";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const params = useParams();
  const category = params.category;
  const store = useStore();
  const router = useRouter();

  const products = Array.isArray(store[category]) ? store[category] : [];

  const goTo = (path) => {
    router.push(path);
  };

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Page Header */}
      <motion.div
        className="text-center mt-10 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          {category.charAt(0).toUpperCase() + category.slice(1)} Products
        </h1>
        <p className="text-gray-600 text-lg">
          Explore our selection of {category} products.
        </p>
      </motion.div>

      {/* Product Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="border rounded-lg p-4 shadow hover:shadow-xl transition duration-300 flex flex-col justify-between bg-white"
          >
            <div className="w-full h-64 mb-3 overflow-hidden rounded-md">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
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

            <button
              className="w-full bg-blue-600 text-white py-2 mt-3 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              disabled={!product.inStock}
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Cart Button */}
      <motion.button
        onClick={() => goTo("/cart")}
        className="fixed bottom-5 right-5 cursor-pointer px-4 py-2 bg-black text-white rounded-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        🛒 Cart
      </motion.button>
    </>
  );
};

export default CategoryPage;
