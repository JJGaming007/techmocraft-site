"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ This was missing!
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          {mounted && (
            <Image
              src={isDark ? "/logo-whitemode-bgdark.png" : "/logo-darkmode-bgwhite.png"}
              alt="Techmocraft Logo"
              width={120}
              height={36}
              className="object-contain"
              priority
            />
          )}
        </Link>

        <div className="hidden md:flex space-x-6 items-center text-sm font-semibold">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-colors duration-200 group ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className="inline-block pb-1">
                  {item.name}
                  <span
                    className={`block h-0.5 transition-all duration-300 ${
                      isActive ? "w-full bg-blue-500" : "w-0 group-hover:w-full bg-blue-500"
                    }`}
                  ></span>
                </span>
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </nav>
  );
}
