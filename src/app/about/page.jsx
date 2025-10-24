"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Variants for staggering animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Title */}
      <motion.h1
        variants={item}
        className="text-4xl font-bold mb-6 text-blue-700"
      >
        About E-Shop
      </motion.h1>

      {/* Description paragraphs */}
      <motion.p
        variants={item}
        className="text-lg text-gray-700 max-w-2xl text-center"
      >
        Welcome to <span className="font-semibold text-blue-600">E-Shop</span>,
        your number one source for all things <em>[product category]</em>. We're
        dedicated to providing you the very best of{" "}
        <em>[product category]</em>, with an emphasis on quality, customer
        service, and affordability.
      </motion.p>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 max-w-2xl text-center mt-4"
      >
        Founded in <em>[year]</em> by <em>[founder's name]</em>, E-Shop has come
        a long way from its beginnings in a humble{" "}
        <em>[starting location]</em>. When <em>[founder's name]</em> first
        started out, their passion for excellence drove them to build something
        unique for customers like you.
      </motion.p>

      <motion.p
        variants={item}
        className="text-lg text-gray-700 max-w-2xl text-center mt-4"
      >
        We hope you enjoy our products as much as we enjoy offering them to you.
        If you have any questions or comments, please don't hesitate to reach
        out — we’re always here for you.
      </motion.p>

      <motion.div variants={item} className="mt-6 text-center">
        <p className="text-lg text-gray-700">
          Sincerely, <br />
          <span className="text-blue-600 font-semibold">
            [Founder's Name], Founder
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
