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
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center w-full py-3">
        {/* Logo - left aligned */}
        <Link href="/" className="flex-shrink-0">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Items */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 px-2 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
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
