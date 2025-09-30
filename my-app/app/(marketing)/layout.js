import FooterPage from "./FooterPage";
import HeaderPage from "./HeaderPage";

export default function RootLayout({ children }) {
  return (
    <>
      <header>
        <HeaderPage />
      </header>
      {children}
      <footer>
        <FooterPage />
      </footer>
    </>
  );
}
