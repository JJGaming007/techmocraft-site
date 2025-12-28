'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { Wrench, RefreshCw, Cog, Shapes, Settings, Layers, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      name: "Die Making",
      description: "Precision die manufacturing with advanced CNC technology for superior quality and accuracy. Custom designs tailored to your specifications.",
      icon: Layers,
    },
    {
      name: "Die Repairing",
      description: "Expert die repair services to extend tool life and maintain optimal performance. Quick turnaround times to minimize downtime.",
      icon: RefreshCw,
    },
    {
      name: "CNC Milling",
      description: "State-of-the-art CNC milling solutions for complex parts and tight tolerances. Multi-axis capabilities for intricate designs.",
      icon: Cog,
    },
    {
      name: "Plastic Molding",
      description: "High-quality plastic molding services for diverse industrial applications. Custom molds designed for efficiency and durability.",
      icon: Shapes,
    },
    {
      name: "Tool Maintenance",
      description: "Comprehensive tool maintenance programs to maximize efficiency and longevity. Preventive care and emergency repairs available.",
      icon: Settings,
    },
    {
      name: "Custom Fabrication",
      description: "Tailored fabrication solutions to meet your unique manufacturing requirements. From concept to completion with precision.",
      icon: Wrench,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-6 bg-gradient-to-br from-primary-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-5" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-6">
            What We Offer
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover our wide range of services tailored for the manufacturing and tooling industry. Quality, precision, and reliability in every project.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 card-hover overflow-hidden"
              >
                {/* Gradient accent on top */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 text-primary-600 dark:text-primary-400 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>

                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 font-semibold transition-all duration-300">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-primary-600 to-blue-500 rounded-2xl p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how Techmocraft Engineering can bring precision and excellence to your manufacturing needs.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
