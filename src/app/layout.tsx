import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Techmocraft Engineering",
  description: "Precision engineering services — die making, repairing, milling, and molding.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Navbar />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-white to-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
