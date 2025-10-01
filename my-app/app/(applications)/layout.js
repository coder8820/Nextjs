import FooterPage from "../(marketing)/FooterPage";
import HeaderPage from "../(marketing)/HeaderPage";

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
