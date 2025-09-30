"use client";

import { useState } from "react";

export default function contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const styles = {
    page: {
      fontFamily:
        "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      padding: "36px 18px",
      display: "flex",
      justifyContent: "center",
      background: "#f7fafc",
      minHeight: "100vh",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      maxWidth: 920,
      background: "#ffffff",
      borderRadius: 12,
      boxShadow: "0 6px 30px rgba(20,20,50,0.08)",
      padding: 28,
      display: "flex",
      gap: 28,
      alignItems: "stretch",
      boxSizing: "border-box",
    },
    left: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 14,
    },
    right: {
      flexBasis: 320,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    heading: {
      fontSize: 22,
      fontWeight: 700,
      margin: 0,
      color: "#0f172a",
    },
    sub: {
      margin: 0,
      color: "#475569",
      fontSize: 14,
      lineHeight: 1.4,
    },
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 8,
    },
    field: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    input: {
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid #d1d5db",
      fontSize: 14,
      outline: "none",
    },
    textarea: {
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid #d1d5db",
      fontSize: 14,
      minHeight: 140,
      resize: "vertical",
    },
    fullWidth: {
      gridColumn: "1 / -1",
    },
    btn: {
      padding: "10px 14px",
      borderRadius: 10,
      border: "none",
      background: "#0ea5a4",
      color: "white",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(14,165,164,0.16)",
    },
    btnDisabled: {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    metaItem: {
      background: "#f1f5f9",
      padding: 12,
      borderRadius: 10,
      fontSize: 14,
      color: "#0f172a",
    },
    smallMuted: {
      fontSize: 13,
      color: "#64748b",
    },
    status: {
      marginTop: 8,
      fontSize: 14,
    },
    // simple responsive fallback using percentage widths; for small screens we'll stack
    "@media (max-width: 720px)": {},
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (
      !form.email.trim() ||
      !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email)
    )
      return "Please enter a valid email.";
    if (!form.message.trim()) return "Please write a message.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: false, success: null, error: null });
    const err = validate();
    if (err) return setStatus({ loading: false, success: null, error: err });

    setStatus({ loading: true, success: null, error: null });

    try {
      // This is a placeholder. Replace '/api/contact' with your real endpoint.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server error");
      }

      setStatus({
        loading: false,
        success: "Thanks — your message was sent.",
        error: null,
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || "Failed to send.",
      });
    }
  }

  return (
    <div style={styles.page}>
      <main style={styles.card}>
        <section style={styles.left}>
          <div>
            <h1 style={styles.heading}>Get in touch</h1>
            <p style={styles.sub}>
              Have a question, an idea, or want to work together? Fill out the
              form and we'll get back to you within 48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form} noValidate>
            <label style={{ ...styles.field }}>
              <span style={styles.smallMuted}>Full name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Your name"
                aria-label="Full name"
                required
              />
            </label>

            <label style={{ ...styles.field }}>
              <span style={styles.smallMuted}>Email</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="you@example.com"
                type="email"
                aria-label="Email address"
                required
              />
            </label>

            <label style={{ ...styles.field, gridColumn: "1 / -1" }}>
              <span style={styles.smallMuted}>Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                style={styles.input}
                placeholder="What is this about?"
                aria-label="Subject"
              />
            </label>

            <label style={{ ...styles.field, gridColumn: "1 / -1" }}>
              <span style={styles.smallMuted}>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Tell us a bit about your project or question..."
                aria-label="Message"
                required
              />
            </label>

            <div
              style={{
                ...styles.field,
                gridColumn: "1 / -1",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="submit"
                style={{
                  ...styles.btn,
                  ...(status.loading ? styles.btnDisabled : {}),
                }}
                disabled={status.loading}
                aria-busy={status.loading}
              >
                {status.loading ? "Sending..." : "Send message"}
              </button>
            </div>

            <div
              style={{
                ...styles.status,
                gridColumn: "1 / -1",
                color: status.error ? "#dc2626" : "#065f46",
              }}
              aria-live="polite"
            >
              {status.error || status.success}
            </div>
          </form>
        </section>

        <aside style={styles.right} aria-label="Contact info">
          <div style={styles.metaItem}>
            <strong>Our office</strong>
            <div style={{ marginTop: 8 }}>
              123 Startup Lane
              <br />
              City, Country
            </div>
          </div>

          <div style={styles.metaItem}>
            <strong>Email</strong>
            <div style={{ marginTop: 8 }}>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </div>
          </div>

          <div style={styles.metaItem}>
            <strong>Phone</strong>
            <div style={{ marginTop: 8 }}>+1 (555) 123-4567</div>
          </div>

          <div style={{ marginTop: 6, fontSize: 13, color: "#64748b" }}>
            You can also paste a map iframe here or link to your social
            profiles.
          </div>
        </aside>
      </main>
    </div>
  );
}
