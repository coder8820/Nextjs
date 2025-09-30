// app/(marketing)/about/AboutClient.jsx
"use client";

import { useState } from "react";

export default function AboutClient() {
  const [hover, setHover] = useState(null);

  const cards = [
    {
      id: 1,
      title: "🚀 Innovation",
      text: "Rapid prototyping and cross-disciplinary research.",
    },
    {
      id: 2,
      title: "🤖 AI Systems",
      text: "Adaptive models that learn in production.",
    },
    {
      id: 3,
      title: "🌐 Global Scale",
      text: "Infrastructure designed for billions of requests.",
    },
  ];

  return (
    <div>
      {/* Neon feature cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginBottom: 28,
        }}
      >
        {cards.map((c) => {
          const is = hover === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHover(c.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                padding: 22,
                borderRadius: 16,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                border: `1px solid ${
                  is ? "rgba(96,165,250,0.65)" : "rgba(96,165,250,0.18)"
                }`,
                boxShadow: is
                  ? "0 12px 40px rgba(56,189,248,0.12), inset 0 0 18px rgba(56,189,248,0.06)"
                  : "0 6px 18px rgba(2,6,23,0.6)",
                transform: is
                  ? "translateY(-8px) scale(1.02)"
                  : "translateY(0)",
                transition: "all 220ms cubic-bezier(.2,.9,.2,1)",
                cursor: "pointer",
                color: "#dbeafe",
              }}
            >
              <h3 style={{ margin: "0 0 8px", color: "#bfdbfe" }}>{c.title}</h3>
              <p style={{ margin: 0, color: "#9fb3d6", fontSize: 14 }}>
                {c.text}
              </p>

              {/* micro detail shown on hover */}
              <div
                style={{
                  marginTop: 12,
                  height: 6,
                  borderRadius: 999,
                  background: is
                    ? "linear-gradient(90deg,#60a5fa,#06b6d4)"
                    : "rgba(255,255,255,0.04)",
                  transition: "background 220ms ease",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Two-column content with a futuristic badge */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 20,
          alignItems: "start",
        }}
      >
        <article
          style={{
            background: "rgba(255,255,255,0.02)",
            padding: 22,
            borderRadius: 12,
            borderLeft: "2px solid rgba(56,189,248,0.08)",
          }}
        >
          <h4 style={{ marginTop: 0, color: "#e6f0ff" }}>Our Vision</h4>
          <p style={{ color: "#9fb3d6", lineHeight: 1.6 }}>
            Build resilient, ethical, and delightful systems that augment human
            capability. We combine design, data and distributed systems to
            create software that feels alive — fast, transparent and helpful.
          </p>

          <ul style={{ marginTop: 12, paddingLeft: 18, color: "#9fb3d6" }}>
            <li>Human-centered AI</li>
            <li>Privacy-first architecture</li>
            <li>Open, auditable pipelines</li>
          </ul>
        </article>

        <aside
          style={{
            padding: 20,
            borderRadius: 12,
            background:
              "linear-gradient(180deg, rgba(8,145,178,0.06), rgba(56,189,248,0.03))",
            textAlign: "center",
            border: "1px solid rgba(96,165,250,0.06)",
          }}
        >
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 999,
              margin: "0 auto 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 30% 20%, rgba(96,165,250,0.22), rgba(8,145,178,0.08))",
              boxShadow:
                "0 8px 30px rgba(8,145,178,0.06), inset 0 -6px 20px rgba(56,189,248,0.03)",
              color: "#e6f0ff",
              fontSize: 34,
            }}
          >
            ✦
          </div>
          <strong style={{ display: "block", color: "#e6f0ff" }}>
            Join our mission
          </strong>
          <p style={{ color: "#9fb3d6", marginTop: 8, fontSize: 13 }}>
            Be the first to try our beta tools.
          </p>
          <button
            style={{
              marginTop: 12,
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              background: "linear-gradient(90deg,#60a5fa,#06b6d4)",
              color: "#032a3a",
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => alert("Thanks — we'll reach out when beta opens!")}
          >
            Request Beta
          </button>
        </aside>
      </div>
    </div>
  );
}
