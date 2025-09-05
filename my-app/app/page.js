"use client";

import Image from "next/image";

export default function Home() {
  console.log("Hello, Next.js!");
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold underline"
        onClick={() => alert('Hello, Next.js!')}
        >Hello, Next.js!</h1>
        <p className="mt-4 text-gray-400 max-w-md text-justify leading-relaxed">
          This is a sample Next.js application demonstrating the use of Tailwind CSS for styling and interactivity with React components.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        onClick={() => alert('Button Clicked!')}
        >
          Click Me
        </button>
        <div className="mt-6">
          this is an image from public folder
        </div>
       </div>
    </>
  );
}
