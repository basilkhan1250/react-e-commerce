"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import addProductToDB from "./database/db";




export default function Home() {
  const router = useRouter();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}          // start hidden and slide down
        animate={{ opacity: 1, y: 0 }}            // fade in & move to position
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold mb-8 text-gray-900"
      >
        Welcome to Our E-Commerce Store
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}           // starts slightly below
        animate={{ opacity: 1, y: 0 }}            // slides up with fade
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg text-gray-700 mb-6 text-center max-w-lg"
      >
        Discover a wide range of products at unbeatable prices.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}              // hover effect
        whileTap={{ scale: 0.95 }}                // click effect
        initial={{ opacity: 0, scale: 0.8 }}      // small and faded
        animate={{ opacity: 1, scale: 1 }}        // grow into view
        transition={{ duration: 0.6, delay: 0.6 }}
        onClick={() => router.push("/products")}
        className="px-6 py-3 bg-blue-600 text-white cursor-pointer rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Shop Now 🛒
      </motion.button>
      {/* <button onClick={addProductToDB}>Upload All Products</button> */}

    </div>
  );
}
