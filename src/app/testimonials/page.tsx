'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Manufacturing Manager',
    company: 'AutoParts Industries Ltd.',
    rating: 5,
    text: 'Techmocraft Engineering has been our trusted partner for die making and repairs for over 5 years. Their precision work and quick turnaround times have significantly reduced our production downtime. Highly recommended!',
    image: '/banner.jpg', // Replace with actual testimonial images
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Operations Director',
    company: 'Precision Components Pvt. Ltd.',
    rating: 5,
    text: 'The quality of CNC milling work from Techmocraft is exceptional. They consistently deliver complex parts with tight tolerances on time. Their technical expertise and customer service are outstanding.',
    image: '/banner.jpg',
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Production Head',
    company: 'Industrial Solutions Inc.',
    rating: 5,
    text: 'We have been working with Techmocraft for plastic molding dies for 3 years. Their custom fabrication solutions have helped us improve our production efficiency by 40%. Excellent team and service!',
    image: '/banner.jpg',
  },
  {
    id: 4,
    name: 'Sunita Desai',
    position: 'Quality Manager',
    company: 'Elite Manufacturing Co.',
    rating: 5,
    text: 'Techmocraft\'s tool maintenance program has been a game-changer for us. Their preventive maintenance approach has extended our die life significantly and reduced unexpected failures. Professional and reliable.',
    image: '/banner.jpg',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    position: 'Plant Manager',
    company: 'Advanced Engineering Works',
    rating: 5,
    text: 'Outstanding die repair services! They restored our heavily worn progressive die to like-new condition. The attention to detail and craftsmanship is remarkable. We trust them with all our critical tooling.',
    image: '/banner.jpg',
  },
  {
    id: 6,
    name: 'Meera Reddy',
    position: 'Engineering Lead',
    company: 'Tech Plastics Pvt. Ltd.',
    rating: 5,
    text: 'The custom fabrication work from Techmocraft exceeded our expectations. They understood our requirements perfectly and delivered a solution that integrated seamlessly into our production line. Highly professional!',
    image: '/banner.jpg',
  },
];

const clientLogos = [
  { name: 'AutoParts Industries', logo: '/banner.jpg' },
  { name: 'Precision Components', logo: '/banner.jpg' },
  { name: 'Industrial Solutions', logo: '/banner.jpg' },
  { name: 'Elite Manufacturing', logo: '/banner.jpg' },
  { name: 'Advanced Engineering', logo: '/banner.jpg' },
  { name: 'Tech Plastics', logo: '/banner.jpg' },
];

export default function TestimonialsPage() {
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
            Client Feedback
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Client <span className="bg-gradient-to-r from-primary-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Testimonials</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it. Hear what our valued clients have to say about working with Techmocraft Engineering.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Happy Clients</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">98%</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Satisfaction Rate</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Quality Assured</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                  <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We&apos;re proud to work with industry leaders across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <Building2 className="w-12 h-12 text-gray-400 dark:text-gray-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-blue-500 rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the same quality and service that our clients rave about. Let&apos;s discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
