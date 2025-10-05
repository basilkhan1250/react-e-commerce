"use client";
import Image from "next/image";
import { Store } from "./component/store";

export default function Home() {
  // ✅ Call the store as a hook
  const { count, increase, decrease } = Store();

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is counter: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
