import React from "react";
import Slider from "./Slider";
import Container from "../Container";
import styles from "@/styles/home/Hero.module.css";

export default function HeroSection() {
  return (
    <Container>
      <section className={styles.hero}>
        {/* text section */}
        <div className={`${styles.textSection}`}>
          <h1>
            One stop solution <span className="text-pink-500">E-store</span>
          </h1>
          <p>Discover the latest headphones, earphones, mobiles tablets etc.</p>
          <p>Exclusive details just for you!</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>
        {/* image slider section */}
        <Slider />
      </section>
    </Container>
  );
}
