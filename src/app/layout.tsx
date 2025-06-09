import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

// ✅ Combined metadata correctly
export const metadata = {
  title: "Techmocraft Engineering",
  description: "Precision engineering services.",
  icons: {
    icon: "/favicon.ico",         // browser tab
    shortcut: "/favicon.ico",     // browser shortcuts
    apple: "/apple-touch-icon.png" // optional
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-custom-grid bg-repeat bg-top text-gray-800 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
