import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import GoToTop from "@/components/goToTop";
import { StoreProvider } from "./redux/storeProvider";
import Footer from "@/components/footer";
import BottomMenu from "@/components/bottomMenu";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jabed Ali Mollah",
  description:
    "Explore the portfolio of Jabed Ali Mollah, a skilled MERN Stack and Next.js developer. View projects, skills, and expertise in modern web development technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <StoreProvider>
          <Header />
          {children}
          <GoToTop />
          <BottomMenu />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
