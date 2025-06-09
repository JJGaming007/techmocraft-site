'use client';

import { motion } from 'framer-motion';
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    "Die Making",
    "Die Repairing",
    "CNC Milling",
    "Plastic Molding",
    "Tool Maintenance",
    "Custom Fabrication",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 py-16 space-y-12"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          Discover our wide range of services tailored for the manufacturing and tooling industry.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              This is a brief description of {service}. Update this content to reflect your exact offerings and benefits.
            </p>
            <Link href="/contact" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm">
              Contact us →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
