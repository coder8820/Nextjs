"use client";

// app/dashboard/page.js (Next.js 13+ App Router)
// or pages/dashboard.js (Next.js 12)

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#1e293b",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "30px", fontSize: "20px" }}>⚡ MyApp</h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {["Dashboard", "Users", "Reports", "Settings"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                textDecoration: "none",
                color: "#cbd5e1",
                fontSize: "16px",
                padding: "10px",
                borderRadius: "8px",
                transition: "0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#334155")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "#f1f5f9", padding: "20px" }}>
        {/* Topbar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Search..."
            style={{
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              width: "250px",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontWeight: "bold" }}>coder</span>
            <img
              src="https://i.pravatar.cc/42"
              alt="avatar"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
        </header>

        {/* Stats Section */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {[
            { title: "Total Users", value: "1,245" },
            { title: "Active Sessions", value: "134" },
            { title: "Revenue", value: "$8,750" },
            { title: "New Signups", value: "56" },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                textAlign: "center",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3 style={{ fontSize: "16px", color: "#64748b" }}>
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </section>

        {/* Table Section */}
        <section
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Recent Activity</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#e2e8f0" }}>
                {["User", "Action", "Time"].map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontSize: "14px",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { user: "Alice", action: "Logged in", time: "10:30 AM" },
                { user: "Bob", action: "Purchased Item", time: "11:15 AM" },
                { user: "Charlie", action: "Logged out", time: "12:05 PM" },
                { user: "David", action: "Updated Profile", time: "1:40 PM" },
              ].map((row, i) => (
                <tr
                  key={row.user}
                  style={{
                    backgroundColor: i % 2 === 0 ? "#f9fafb" : "white",
                  }}
                >
                  <td style={{ padding: "12px" }}>{row.user}</td>
                  <td style={{ padding: "12px" }}>{row.action}</td>
                  <td style={{ padding: "12px" }}>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
