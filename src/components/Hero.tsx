import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-center shadow-sm">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Welcome to Techmocraft Engineering.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Trusted experts in die making, milling, repairing, and plastic molding.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-100 to-transparent dark:from-gray-800 dark:to-transparent opacity-40" />
    </section>
  );
}
