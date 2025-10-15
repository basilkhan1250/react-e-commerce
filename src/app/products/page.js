"use client";
import Navbar from "../component/Navbar";
import Products from "../component/Products";

export default function ProductsPage() {
  return (
    <>
      <div className="text-center mt-10 mb-6">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          Our Featured Products
        </h1>
        <p className="text-gray-600 text-lg">
          Discover top-quality items at unbeatable prices.
        </p>
      </div>
      <Products />
    </>
  );
}
