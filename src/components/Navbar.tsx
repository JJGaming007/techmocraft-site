import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo: place your logo image in /public/logo.png */}
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services">Services
            Products
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
