import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/Components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProCoder Next.js App",
  description: "Kumail and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <HeaderPage />
        {children}
      </body>
    </html>
  );
}
