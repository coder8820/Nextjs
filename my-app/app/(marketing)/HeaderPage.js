// app/header/page.js (Next.js 13+ App Router)
// or pages/header.js (Next.js 12)

"use client";

export default function HeaderPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0f1f 100%)",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px 40px",
          background: "rgba(15, 23, 42, 0.7)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(56,189,248,0.2)",
        }}
      >
        {/* Logo */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#38bdf8",
            textShadow: "0 0 10px rgba(56,189,248,0.6)",
            cursor: "pointer",
          }}
        >
          proCoder
        </h2>

        {/* Links */}
        <div style={{ display: "flex", gap: "30px" }}>
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
                  "0 0 10px rgba(56,189,248,0.8)";
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
      </nav>

      {/* Glow Backgrounds */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(150px)",
        }}
      />

      {/* Hero Content */}
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "bold",
          marginBottom: "16px",
          textShadow:
            "0 0 15px rgba(56,189,248,0.6), 0 0 30px rgba(56,189,248,0.4)",
        }}
      >
        Welcome to <span style={{ color: "#38bdf8" }}>FutureCorp</span>
      </h1>

      <p
        style={{
          maxWidth: "600px",
          fontSize: "18px",
          lineHeight: 1.6,
          marginBottom: "30px",
          color: "#cbd5e1",
        }}
      >
        Building cutting-edge digital experiences powered by AI, creativity, and
        futuristic design.
      </p>

      <button
        style={{
          padding: "14px 28px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(90deg,#38bdf8,#6366f1)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(56,189,248,0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 0 30px rgba(56,189,248,0.8), 0 0 50px rgba(99,102,241,0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(56,189,248,0.4)";
        }}
      >
        🚀 Join Now
      </button>
    </div>
  );
}
