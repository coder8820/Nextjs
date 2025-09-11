export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "teal", color: "white", padding: 10 }}>
          Header
        </header>
        {children}
        <footer style={{ background: "grey", padding: 10, color: "white" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}
