"use client";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Products from "./component/Products";


export default function Home() {
  // ✅ Call the store as a hook

  return (
    <>
      <Navbar />
      <div>
        <Products />
      </div>
    </>
  );
}
