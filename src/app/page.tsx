'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    'Die Making',
    'Die Repairing',
    'CNC Milling',
    'Plastic Molding',
    'Tool Maintenance',
    'Custom Fabrication',
  ];

  return (
    <div className="space-y-24">
      {/* Parallax Banner with hero text */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-[60vh] sm:h-[75vh] w-full overflow-hidden rounded-xl shadow-xl"
      >
        <div
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg mb-4">
            Welcome to Techmocraft Engineering
          </h1>
          <p className="text-lg max-w-2xl mb-6 text-white/90">
            Delivering precision and performance in every tool we craft. Your reliable partner in die manufacturing and industrial solutions.
          </p>
          <Link href="/services">
            <span className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition">
              Explore Services
            </span>
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Us</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Techmocraft Engineering is dedicated to excellence in die making, CNC milling, and plastic molding. Our commitment to quality, innovation, and reliability drives everything we do.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Brief description or placeholder text for {service}. You can edit this to describe the service in more detail.
              </p>
              <Link href="/services">
                <span className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm">
                  Know more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Address</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          123 Techmocraft Industrial Zone, Mumbai, Maharashtra, India
        </p>
        <div className="aspect-video w-full max-w-2xl mx-auto border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991251!2d72.7410998489207!3d19.0821978392828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d48d80cf7%3A0xd545e1c65a6eb5a4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681562826110!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
