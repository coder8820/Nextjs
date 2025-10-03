"use client";
import styles from "@/styles/home/hero.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider() {
  const images = [
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
    "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((src, index) => (
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            } `}
            key={index}
            fill
          />
        ))}
      </div>
    </div>
  );
}
