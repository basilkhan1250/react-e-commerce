"use client";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Products from "../component/Products";

export default function ProductsPage() {
  return (
    <>
      {/* Navbar */}

      {/* Page Header with Motion */}
      <div className="text-center mt-10 mb-6 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}          // fade in from top
          animate={{ opacity: 1, y: 0 }}            // slide into position
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-blue-700 mb-2"
        >
          Our Featured Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}           // fade in from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 text-lg"
        >
          Discover top-quality items at unbeatable prices.
        </motion.p>
      </div>

      {/* Product Grid Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}        // start slightly smaller
        animate={{ opacity: 1, scale: 1 }}           // zoom in smoothly
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Products />
      </motion.div>
    </>
  );
}
