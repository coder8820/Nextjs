// app/(marketing)/about/page.js
export const metadata = {
  title: "About — FutureCorp",
  description: "Futuristic about page for FutureCorp",
};

import AboutClient from "./AboutClient";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 24px",
        background: "linear-gradient(135deg,#020617,#0f172a 40%,#071129)",
        color: "#e6eef8",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <section style={{ width: "100%", maxWidth: 1100 }}>
        <header style={{ textAlign: "center", marginBottom: 36 }}>
          <h1
            style={{
              fontSize: 44,
              margin: 0,
              letterSpacing: 0.6,
              textShadow: "0 0 20px rgba(56,189,248,0.16)",
            }}
          >
            FutureCorp <span style={{ color: "#38bdf8" }}>—</span>{" "}
            <span style={{ color: "#60a5fa" }}>Shaping Tomorrow</span>
          </h1>
          <p style={{ color: "#9fb3d6", marginTop: 10, fontSize: 16 }}>
            We design intelligent systems, immersive experiences and the tools
            that power tomorrow’s web.
          </p>
        </header>

        {/* Client-side interactive part */}
        <AboutClient />
      </section>
    </main>
  );
}
