'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 py-16 space-y-12"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          About Techmocraft Engineering
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300"
        >
          We are a dedicated team of professionals focused on precision die manufacturing, advanced machining, and plastic molding.
        </motion.p>
      </div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            To deliver high-quality tooling solutions that exceed client expectations through innovation, craftsmanship, and dedication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Experience & Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Over 15 years in precision manufacturing</li>
            <li>Customer-centric and detail-oriented approach</li>
            <li>Advanced tooling methods and equipment</li>
            <li>Quality assurance and on-time delivery</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Why Choose Us?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Techmocraft, we blend engineering expertise with a passion for solving complex manufacturing challenges. Our work speaks for itself.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
