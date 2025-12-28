'use client';

import { motion } from 'framer-motion';
import { Target, Award, Users, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Over 15 years in precision manufacturing',
      description: 'Extensive industry experience and expertise',
    },
    {
      icon: Users,
      title: 'Customer-centric approach',
      description: 'Your success is our priority',
    },
    {
      icon: Zap,
      title: 'Advanced tooling methods',
      description: 'State-of-the-art equipment and technology',
    },
    {
      icon: Award,
      title: 'Quality assurance',
      description: 'Rigorous standards and on-time delivery',
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
            About Us
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-primary-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Techmocraft Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We are a dedicated team of professionals focused on precision die manufacturing, advanced machining, and plastic molding solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              To deliver high-quality tooling solutions that exceed client expectations through innovation, craftsmanship, and unwavering dedication to excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At Techmocraft, we blend engineering expertise with a passion for solving complex manufacturing challenges. Our commitment to precision and quality drives everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-blue-500 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Why Choose Us?</h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                With over 15 years of industry experience, we&apos;ve built a reputation for delivering exceptional results. Our work speaks for itself.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-white/80 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-white/80 text-sm">Quality Assured</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide our commitment to excellence in every project
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 sm:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Techmocraft Engineering can bring precision and excellence to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Our Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Contact Us
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
