// app/components/Navbar.js (Next.js 13+ App Router)
// or components/Navbar.js (Next.js 12)

"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px 30px",
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(56,189,248,0.2)",
        zIndex: 1,
      }}
    >
      {/* Logo */}
      <h1
        style={{
          fontSize: "26px",
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, #38bdf8, #6366f1, #ec4899, #38bdf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "moveGradient 6s linear infinite",
          cursor: "pointer",
        }}
      >
        proCoder
      </h1>

      {/* Desktop Links */}
      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
        className="desktop-menu"
      >
        {["Home", "About", "Services", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              color: "#cbd5e1",
              fontSize: "16px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              display: "none", // hidden by default (we’ll show via media query)
            }}
            className="nav-link"
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#38bdf8";
              e.currentTarget.style.textShadow =
                "0 0 12px rgba(56,189,248,0.8)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#cbd5e1";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          width: "28px",
          height: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        className="hamburger"
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            style={{
              height: "3px",
              width: "100%",
              background: "#38bdf8",
              borderRadius: "2px",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            background: "rgba(15,23,42,0.95)",
            borderRadius: "12px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            boxShadow: "0 0 20px rgba(56,189,248,0.3)",
          }}
          className="mobile-menu"
        >
          {["Home", "About", "Services", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#cbd5e1",
                fontSize: "16px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.textShadow =
                  "0 0 12px rgba(56,189,248,0.8)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Animations + Media Queries */}
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        @media (min-width: 768px) {
          .nav-link {
            display: block !important;
          }
          .hamburger {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
