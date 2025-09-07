"use client";

import Link from "next/link";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto p-4">
        <Link href="/about">about</Link> | <Link href="/services">services</Link>
        ｜
        <Link href="/contact">contact</Link>
        <h1>Welcome to Next.js!</h1>
        <p>In the name of allah the most benificent and the most merciful</p>
      </div>
    </>
  );
}
