// src/components/Footer.tsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Techmocraft Engineering. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
