export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "teal", color: "white", padding: 10 }}>
        Header (marketing)
      </header>
      {children}
      <footer style={{ background: "seagreen", padding: 10, color: "white" }}>
        Footer (marketing)
      </footer>
    </>
  );
}
