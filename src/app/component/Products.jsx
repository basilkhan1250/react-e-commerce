"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import useFetchProducts from "../database/fetchdata";

const Products = () => {
  const { categories, loading } = useFetchProducts();
  const router = useRouter();

  const goTo = (path) => router.push(path);

  // 🌀 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  // 🟡 Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  // 🧠 Find the “product” category
  const productCategory = categories.find(
    (category) => category.id?.toLowerCase() === "products"
  );

  // 🔴 If no such category exists
  if (!productCategory || !productCategory.items || productCategory.items.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-xl text-gray-600">
        No products found in “product” category.
      </div>
    );
  }

  // 🟢 Render Only “Product” Category Items
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"
      >
        {productCategory.items.map((product, index) => (
          <motion.div
            key={`${product.id || product.name}-${index}`}
            variants={cardVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between bg-white"
          >
            {/* Product Image */}
            <div className="w-full h-64 mb-3 overflow-hidden rounded-md">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-1">
                {product.description}
              </p>
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

            {/* Add to Cart Button */}
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
