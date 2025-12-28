'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      name: 'Die Making',
      description: 'Precision die manufacturing with advanced CNC technology for superior quality and accuracy.',
    },
    {
      name: 'Die Repairing',
      description: 'Expert die repair services to extend tool life and maintain optimal performance.',
    },
    {
      name: 'CNC Milling',
      description: 'State-of-the-art CNC milling solutions for complex parts and tight tolerances.',
    },
    {
      name: 'Plastic Molding',
      description: 'High-quality plastic molding services for diverse industrial applications.',
    },
    {
      name: 'Tool Maintenance',
      description: 'Comprehensive tool maintenance programs to maximize efficiency and longevity.',
    },
    {
      name: 'Custom Fabrication',
      description: 'Tailored fabrication solutions to meet your unique manufacturing requirements.',
    },
  ];

  return (
    <div className="space-y-24 pb-12">
      {/* Parallax Banner with hero text */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-[60vh] sm:h-[75vh] w-full overflow-hidden rounded-2xl shadow-2xl mx-4 sm:mx-6 lg:mx-8"
      >
        <div
          className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 dark:from-blue-300 dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
                Techmocraft Engineering
              </span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-white/90 drop-shadow-lg">
              Delivering precision and performance in every tool we craft. Your reliable partner in die manufacturing and industrial solutions.
            </p>
            <Link href="/services">
              <span className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 sm:px-8"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Engineering Excellence Since Day One
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Quality Assured</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-lg text-center mt-8 max-w-3xl mx-auto">
          Techmocraft Engineering is dedicated to excellence in die making, CNC milling, and plastic molding. Our commitment to quality, innovation, and reliability drives everything we do.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-8"
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your manufacturing and tooling needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 card-hover overflow-hidden"
            >
              {/* Gradient accent on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Check icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link href="/services">
                <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 font-semibold text-sm transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
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
        className="max-w-5xl mx-auto px-6 sm:px-8"
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Our Location</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            123 Techmocraft Industrial Zone
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Mumbai, Maharashtra, India
          </p>
        </div>
        <div className="aspect-video w-full max-w-3xl mx-auto border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991251!2d72.7410998489207!3d19.0821978392828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d48d80cf7%3A0xd545e1c65a6eb5a4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681562826110!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
