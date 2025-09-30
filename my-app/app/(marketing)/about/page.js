"use client"; // ✅ needed for hover effects in App Router

// app/about/page.js  (Next.js 13+ with App Router)
// or pages/about.js  (Next.js 12)

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #020617)",
        color: "#e2e8f0",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "20px",
          textShadow: "0px 0px 15px #38bdf8, 0px 0px 30px #0ea5e9",
        }}
      >
        About <span style={{ color: "#38bdf8" }}>Us</span>
      </h1>

      {/* Subtitle */}
      <p
        style={{
          maxWidth: "700px",
          fontSize: "18px",
          lineHeight: "1.8",
          marginBottom: "50px",
          color: "#cbd5e1",
        }}
      >
        We are a forward-thinking team building the future of digital
        experiences. Our mission is to merge cutting-edge technology with
        creativity, crafting solutions that inspire and empower people around
        the globe.
      </p>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {[
          {
            title: "🚀 Innovation",
            text: "We push boundaries to create futuristic solutions.",
          },
          {
            title: "🌐 Global Reach",
            text: "Connecting people across continents seamlessly.",
          },
          {
            title: "🤖 AI & Beyond",
            text: "Harnessing AI to build smarter, adaptive systems.",
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(56,189,248,0.4)",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0px 0px 20px rgba(56,189,248,0.2)",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0px 0px 30px rgba(56,189,248,0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0px 0px 20px rgba(56,189,248,0.2)";
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "10px",
                color: "#38bdf8",
                textShadow: "0px 0px 8px #0ea5e9",
              }}
            >
              {card.title}
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px" }}>{card.text}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          fontSize: "14px",
          color: "#64748b",
        }}
      >
        © 2025 FutureCorp. All rights reserved.
      </footer>
    </div>
  );
}
