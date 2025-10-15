"use client";

import React from "react";
import { useStore } from "../component/store";

const Products = () => {
  const { products } = useStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
        >
          <div className="w-full h-84 mb-3 overflow-hidden rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
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
            className="w-full bg-blue-600 text-white py-2 mt-3 rounded hover:bg-blue-700 transition duration-300"
            disabled={!product.inStock}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
