"use client";
import React from "react";
import { useStore } from "../../component/store";
import { useParams } from "next/navigation";

const CategoryPage = () => {
    const params = useParams();
    console.log("Params:", params);
    const category = params.category;
    console.log("Category:", category);

    const store = useStore();
    console.log("Store:", store);
    const products = Array.isArray(store[category]) ? store[category] : [];
    console.log("Products:", products);

    return (
        <>
            <div className="text-center mt-10 mb-6">
                <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Products
                </h1>
                <p className="text-gray-600 text-lg">
                    Explore our selection of {category} products.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
                    >
                        <div className="w-full h-100 mb-3 overflow-hidden rounded-md">
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
                                className={`mt-1 ${product.inStock ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {product.inStock ? "In Stock" : "Out of Stock"}
                            </p>
                        </div>
                        <button
                            className="w-full bg-blue-600 cursor-pointer text-white py-2 mt-3 rounded hover:bg-blue-700 transition duration-300"
                            disabled={!product.inStock}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoryPage;
