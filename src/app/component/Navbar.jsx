"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
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

  // Navigation function
  const goTo = (path) => {
    router.push(path);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="w-full bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <h1
            className="text-2xl font-bold cursor-pointer hover:text-gray-200 transition"
            onClick={() => goTo("/")}
          >
            🛍️ E-Shop
          </h1>

          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => goTo("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => goTo("/about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => goTo("/contact")}
            >
              Contact
            </li>
            <li
              className="cursor-pointer hover:text-gray-200"
              onClick={() => goTo("/products")}
            >
              Products
            </li>

            {/* Dropdown */}
            <div className="relative">
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:text-gray-200"
              >
                Categories ▾
              </li>

              {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20">
                  {categories.map((cat, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ul>
        </div>

        {/* Right Section: Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-white rounded-full overflow-hidden w-64 md:w-80"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="px-4 py-2 text-gray-700 focus:outline-none w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-800 transition"
          >
            🔍
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
