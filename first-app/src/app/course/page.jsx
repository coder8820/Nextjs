import React from "react";
import image from "@/images/attitude.png";
import Image from "next/image";

export default function coursePage() {
  return (
    <main>
      <h1>These Courses are we offering!</h1>
      <Image width={400} height={400} src={image.src} />
    </main>
  );
}
