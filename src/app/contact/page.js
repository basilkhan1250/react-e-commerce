"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 overflow-hidden">
      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold mb-4 text-blue-700"
      >
        Contact Us
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-gray-700 max-w-2xl text-center mb-6"
      >
        We'd love to hear from you! Whether you have questions about our
        products, need help with an order, or just want to share feedback —
        we’re always ready to listen.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
      >
        {/* Name Input */}
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="mb-4"
        >
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <motion.input
            whileFocus={{ borderColor: "#2563eb", scale: 1.02 }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <motion.input
            whileFocus={{ borderColor: "#2563eb", scale: 1.02 }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </motion.div>

        {/* Message Box */}
        <motion.div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <motion.textarea
            whileFocus={{ borderColor: "#2563eb", scale: 1.01 }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your Message"
          ></motion.textarea>
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#1d4ed8",
              boxShadow: "0px 0px 12px rgba(37, 99, 235, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default ContactPage;
