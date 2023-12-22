import { Inter } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
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
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
