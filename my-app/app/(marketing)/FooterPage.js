// app/footer/page.js  (Next.js App Router)
// or pages/footer.js  (Next.js Pages Router)

"use client";

export default function FooterPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0f1f 100%)",
        color: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: "80px 20px 20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Animated Gradient Border */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "5px",
          background:
            "linear-gradient(90deg, #38bdf8, #6366f1, #ec4899, #38bdf8)",
          backgroundSize: "300% 100%",
          animation: "moveGradient 8s linear infinite",
        }}
      />

      {/* Gradient Glow Title */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "10px",
          background:
            "linear-gradient(90deg, #38bdf8, #6366f1, #ec4899, #38bdf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "moveGradient 6s linear infinite",
        }}
      >
        FutureCorp
      </h2>

      <p style={{ color: "#cbd5e1", marginBottom: "40px" }}>
        Shaping tomorrow’s technology, today ✨
      </p>

      {/* 3 Column Links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: "800px",
          margin: "0 auto 40px",
          gap: "20px",
          textAlign: "left",
        }}
      >
        <div>
          <h4 style={{ color: "#38bdf8", marginBottom: "10px" }}>Company</h4>
          {["About", "Careers", "Blog"].map((link) => (
            <p
              key={link}
              style={{
                color: "#cbd5e1",
                margin: "6px 0",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(56,189,248,0.7)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link}
            </p>
          ))}
        </div>
        <div>
          <h4 style={{ color: "#38bdf8", marginBottom: "10px" }}>Services</h4>
          {["Web Development", "AI Solutions", "Cloud Hosting"].map((link) => (
            <p
              key={link}
              style={{
                color: "#cbd5e1",
                margin: "6px 0",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(56,189,248,0.7)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link}
            </p>
          ))}
        </div>
        <div>
          <h4 style={{ color: "#38bdf8", marginBottom: "10px" }}>Support</h4>
          {["Help Center", "Terms", "Privacy"].map((link) => (
            <p
              key={link}
              style={{
                color: "#cbd5e1",
                margin: "6px 0",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#38bdf8";
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(56,189,248,0.7)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "#cbd5e1";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link}
            </p>
          ))}
        </div>
      </div>

      {/* Social Icons with Floating Animation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {["🌐", "🐦", "📸", "🎥", "💼"].map((icon, i) => (
          <span
            key={i}
            style={{
              fontSize: "26px",
              cursor: "pointer",
              animation: `float${
                i % 2 === 0 ? "Up" : "Down"
              } 3s ease-in-out infinite`,
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.3)";
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
        © {new Date().getFullYear()} ProCoder. All rights reserved.
      </p>

      {/* Animations */}
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatDown {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}
