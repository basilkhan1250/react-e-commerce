"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
// ...existing code...

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light"
  );
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const categories = [
    "Fashion",
    "Accessories",
    "Electronics",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Toys",
    "Gaming",
  ];

  const goTo = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 12 }}
      className={`w-full shadow-md ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-blue-700 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold cursor-pointer hover:text-gray-200 transition"
            onClick={() => goTo("/")}
          >
            🛍️ E-Shop
          </motion.h1>

          <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
            {["Home", "About", "Contact", "Products"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.1, color: "#dbeafe" }}
                className="cursor-pointer hover:text-gray-200"
                onClick={() => goTo(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
              >
                {item}
              </motion.li>
            ))}

            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.li
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer hover:text-gray-200 select-none"
              >
                Categories ▾
              </motion.li>

              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20 dark:bg-gray-800 dark:text-gray-100"
                  >
                    {categories.map((cat, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ backgroundColor: "#e0f2fe", scale: 1.05 }}
                        onClick={() => goTo(`/categories/${cat.toLowerCase()}`)}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer dark:hover:bg-gray-700"
                      >
                        {cat}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </ul>
        </div>

        {/* Right Section: Search Bar + Theme Toggle */}
        <div className="flex items-center gap-3">
          <motion.form
            onSubmit={handleSearch}
            className="flex items-center rounded-full overflow-hidden w-64 md:w-80"
            whileFocus={{ scale: 1.03 }}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="px-4 py-2 focus:outline-none w-full bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-800 transition"
            >
              🔍
            </motion.button>
          </motion.form>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md bg-white text-gray-800 hover:opacity-90 transition dark:bg-gray-700 dark:text-gray-200"
            title={theme === "light" ? "Switch to dark" : "Switch to light"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
