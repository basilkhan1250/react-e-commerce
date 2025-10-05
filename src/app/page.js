import Image from "next/image";
import { useStore } from "./component/store";

export default function Home() {
  const { count, increase, decrease } = useStore();

  return (
    <>
      <div>
        <h1>Welcome to Next.js!</h1>
        <p>{count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}
