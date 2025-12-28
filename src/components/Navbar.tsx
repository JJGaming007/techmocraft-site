"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
    { name: "Get Quote", href: "/quote" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full py-3">
        {/* Logo - left aligned */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <div className="relative w-[140px] h-[50px] sm:w-[180px] sm:h-[70px]">
            <Image
              src="/logo-darkmode-bgwhite.png"
              alt="Techmocraft Logo"
              fill
              className="block dark:hidden object-contain"
              priority
            />
            <Image
              src="/logo-whitemode-bgdark.png"
              alt="Techmocraft Logo"
              fill
              className="hidden dark:block object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center text-sm font-semibold">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative transition-all duration-200 group py-1 ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                <span className="inline-block">
                  {item.name}
                  <span
                    className={`block h-0.5 mt-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-gradient-to-r from-primary-600 to-blue-500"
                        : "w-0 group-hover:w-full bg-gradient-to-r from-primary-600 to-blue-500"
                    }`}
                  ></span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Items */}
      {isOpen && (
        <div className="md:hidden pb-4 flex flex-col space-y-2 px-2 text-sm font-medium border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`py-2 px-4 rounded-lg transition-all ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
