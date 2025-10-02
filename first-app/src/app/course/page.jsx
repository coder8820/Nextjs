import React from "react";
import image from "@/images/attitude.png";
import Image from "next/image";
import Link from "next/link";

export default function coursePage() {
  return (
    <main>
      <div>
        <h1>These Courses are we offering!</h1>
        <p>More coming soon...</p>
        <div>
          <ul>
            <li>
              <Link href="course/course-details/course-1">
                Complete Web Development
              </Link>
            </li>
            <li>
              <Link href="course/course-details/course-2">
                Data Structures and Algorithms
              </Link>
            </li>
            <li>
              <Link href="course/course-details/course-3">
                Machine Learning
              </Link>
            </li>
            <li>
              <Link href="course/course-details/course-4">
                Artificial Intelligence
              </Link>
            </li>
            <li>
              <Link href="course/course-details/course-5">
                Competitive Programming
              </Link>
            </li>
            <li>
              <Link href="course/course-details/course-6">
                Interview Preparation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Image width={400} height={400} src={image.src} alt="image" /> */}
      <Image
        width={400}
        height={400}
        alt="image"
        src={
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png"
        }
      />
    </main>
  );
}
