import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers";
import Navigation from "./ui/Nav";
import Footer from "./ui/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LPU MAP",
  description: "Created by IEEE ML/AI team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <nav className="top-0 fixed w-full z-20">
            <Navigation />
          </nav>
          <main className="w-full mx-0">{children}</main>

          <footer className="bottom-0 w-full">
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}
