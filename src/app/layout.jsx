import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Armache Portfolio",
  description:
    "Dear human, this website is the portfolio of the developer Kevin Armache",
};

export default function RootLayout({ children }) {
  if (typeof window !== "undefined") {
    return (
      <div className="h-screen  flex flex-col items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header>
          <NavBar />
          <MobileNavbar />
        </header>
        <SocialMedia />
        {children}
        <Footer />
      </body>
    </html>
  );
}
