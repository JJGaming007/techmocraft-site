// src/components/Footer.tsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Techmocraft Engineering</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Precision engineering services with 15+ years of experience.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mumbai, Maharashtra, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
              <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</Link>
              <Link href="/portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portfolio</Link>
              <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About Us</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Resources</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/testimonials" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Testimonials</Link>
              <Link href="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">FAQ</Link>
              <Link href="/quote" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Get Quote</Link>
              <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Contact</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Email: techmocraft7@gmail.com</p>
              <p>Phone: +91 XXX XXX XXXX</p>
              <p className="mt-4 text-xs">
                Business Hours:<br />
                Mon-Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Techmocraft Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
