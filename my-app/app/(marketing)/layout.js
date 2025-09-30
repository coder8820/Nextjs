import FooterPage from "./FooterPage";
import HeaderPage from "./HeaderPage";

export default function RootLayout({ children }) {
  return (
    <>
      <header style={{ background: "teal", color: "white", padding: 10 }}>
        <HeaderPage />
      </header>
      {children}
      <footer style={{ background: "seagreen", padding: 10, color: "white" }}>
        <FooterPage />
      </footer>
    </>
  );
}
