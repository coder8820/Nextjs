"use client";

import Link from "next/link";

// import Image from "next/image";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <div className="mx-auto p-4">
        <h1>Home Page</h1>
        <Link href="/about">about</Link> |{" "}
        <Link href="/services">services</Link>｜<Link href="/blogs">Blogs</Link>
        <h1>Welcome to Technical Agencies!</h1>
        <p>In the name of allah the most benificent and the most merciful</p>
      </div>
    </>
  );
}
