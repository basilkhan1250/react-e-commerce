"use client";
import React from "react";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        "Fashion",
        "Accessories",
        "Electronics",
        "Home & Kitchen",
        "Beauty",
        "Sports",
        "Toys",
    ];


    return (
        <>
            <div className="w-full h-16 bg-blue-700 text-white flex items-center">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <ul className="flex space-x-4">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Contact</li>

                        <div className="relative inline-block text-left">
                            < li
                                onClick={() => setIsOpen(!isOpen)}
                                className="cursor-pointer"
                            >
                                Categories
                            </li>

                            {isOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 border rounded-lg shadow-lg z-10">
                                    {categories.map((cat, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 hover:bg-gray-900  cursor-pointer"
                                        >
                                            {cat}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar