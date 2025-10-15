"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const categories = [
    "Fashion",
    "Accessories",
    "Electronics",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Toys",
  ];

  // Function to navigate
  const goTo = (path) => {
    router.push(path);
  };

  return (
    <>
      <div className="w-full h-16 bg-blue-700 text-white flex items-center">
        <div className="container mx-auto flex justify-between items-center px-4">
          <ul className="flex space-x-4">
            <li
              className="cursor-pointer hover:underline"
              onClick={() => goTo("/")}
            >
              Home
            </li>

            <li
              className="cursor-pointer hover:underline"
              onClick={() => goTo("/about")}
            >
              About
            </li>

            <li
              className="cursor-pointer hover:underline"
              onClick={() => goTo("/contact")}
            >
              Contact
            </li>

            <li
              className="cursor-pointer hover:underline"
              onClick={() => goTo("/products")}
            >
              Products
            </li>

            <div className="relative inline-block text-left">
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:underline"
              >
                Categories
              </li>

              {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-700 border rounded-lg shadow-lg z-10">
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-900 cursor-pointer"
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
  );
};

export default Navbar;
