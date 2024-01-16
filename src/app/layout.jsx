import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kevin Armache Portfolio",
  description:
    "Dear human, this website is the portfolio of the developer Kevin Armache",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header>
          <NavBar className="md:block sm:hidden" />
          <MobileNavbar />
        </header>
        <SocialMedia />
        {children}
        <Footer />
      </body>
    </html>
  );
}
