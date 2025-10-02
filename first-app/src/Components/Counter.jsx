"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);
  const handleClick = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Decrement</button>
    </div>
  );
}
