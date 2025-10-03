import Container from "./Container";
import styles from "@/styles/header.module.css";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className={`${styles.header} py-3 px-1 shadow`}>
      <Container className="flex justify-between">
        <div className="flex item-center">
          <span className="text-pink-500 font-bold text-4xl">
            E-store<b className="text-black">.</b>
          </span>
        </div>
        {/* Search Bar */}
        <div className={`${styles.searchBar} flex items-center`}>
          <input
            type="text"
            placeholder="Search for Prodcuts..."
            className={`${styles.searchInput}`}
          />
          <button className={styles.searchButton}>
            <FiSearch size={18} />
          </button>
        </div>
        {/* Navigation bar */}
        <NavBar />
      </Container>
    </header>
  );
}

// navBar
const NavBar = () => {
  return (
    <nav className="flex items-center gap-5">
      {/* Navigation links */}
      <ul className="flex items-center gap-3 font-semibold">
        {/* import React from "react"; */}
        <li className={`${styles.navLink}`}>Home</li>
        <li className={`${styles.navLink}`}>store</li>
      </ul>
      {/* cart icon */}
      <div className="relative">
        <FiShoppingCart className={styles.cart} color="black" size={24} />
        <span
          className={`${styles.cartBadge} absolute top-[-15px] right-[-20px] bg-pink-500
          text-white text-xs font-bold w-5 h-5 flex items-center justity-between rounded-full`}
        >
          3
        </span>
      </div>
    </nav>
  );
};
