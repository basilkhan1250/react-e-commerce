"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Our E-Commerce Store
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Discover a wide range of products at unbeatable prices.
      </p>
      <button
        onClick={() => router.push("/products")}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-300"
      >
        Shop Now
      </button>
    </div>
  );
}
