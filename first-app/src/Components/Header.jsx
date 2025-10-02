import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <main>
        <h2>proCoder</h2>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="course">
            <li>Course</li>
          </Link>
          <li>Blog</li>
        </ul>
      </main>
    </header>
  );
}
