// app/footer/page.js (Next.js 13+ App Router)
// or pages/footer.js (Next.js 12)

"use client";

export default function FooterPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0f1f 100%)",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glowing Background */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.3), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(100px)",
          animation: "pulse 6s infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)",
          borderRadius: "50%",
          filter: "blur(120px)",
          animation: "pulse 8s infinite alternate",
        }}
      />

      {/* Footer Content */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#38bdf8",
          textShadow: "0 0 10px rgba(56,189,248,0.7)",
        }}
      >
        FutureCorp
      </h2>
      <p style={{ color: "#cbd5e1", marginBottom: "25px" }}>
        Innovating the future, one pixel at a time 🚀
      </p>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "25px",
        }}
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

      {/* Social Media Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {["🌐", "💼", "🐦", "📸", "🎥"].map((icon, i) => (
          <span
            key={i}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.3) rotate(10deg)";
              e.currentTarget.style.textShadow =
                "0 0 20px rgba(56,189,248,0.9)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <p
        style={{
          fontSize: "14px",
          color: "#94a3b8",
          borderTop: "1px solid rgba(56,189,248,0.2)",
          paddingTop: "15px",
          marginTop: "20px",
        }}
      >
        © {new Date().getFullYear()} FutureCorp. All rights reserved.
      </p>
    </div>
  );
}
