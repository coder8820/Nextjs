"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline"
        onClick={() => alert('Hello, Next.js!')}
        >Hello, Next.js!</h1>
      </div>
    </>
  );
}
