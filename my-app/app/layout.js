export const metadata = {
  title: {
    template: "%s | Next.js App",
    default: "Next.js App",
  },
  description: "A simple Next.js application",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
