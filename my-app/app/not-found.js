import Link from "next/link";
import React from "react";

export default function () {
  return (
    <div>
      <h1>Page not Found!</h1>
      <p>could not fount the page you are looking for!</p>
      <button>
        <Link href="/">Go Back</Link>
      </button>
    </div>
  );
}
