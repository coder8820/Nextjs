export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "orange", color: "white", padding: 10 }}>
        <HeaderPage />
      </header>
      {children}
      <footer style={{ background: "green", padding: 10, color: "white" }}>
        <FooterPage />
      </footer>
    </>
  );
}
