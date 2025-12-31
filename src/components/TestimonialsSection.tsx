'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Quote, Star, ArrowRight } from 'lucide-react';

const featuredTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'Manufacturing Manager',
    company: 'AutoParts Industries Ltd.',
    rating: 5,
    text: 'Techmocraft Engineering has been our trusted partner for die making and repairs for over 5 years. Their precision work and quick turnaround times have significantly reduced our production downtime.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Operations Director',
    company: 'Precision Components Pvt. Ltd.',
    rating: 5,
    text: 'The quality of CNC milling work from Techmocraft is exceptional. They consistently deliver complex parts with tight tolerances on time. Their technical expertise is outstanding.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Production Head',
    company: 'Industrial Solutions Inc.',
    rating: 5,
    text: 'We have been working with Techmocraft for plastic molding dies for 3 years. Their custom fabrication solutions have helped us improve our production efficiency by 40%.',
  },
];

export function TestimonialsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 sm:px-8"
    >
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-4">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Trusted by leading manufacturers for precision engineering excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredTestimonials.map((testimonial, index) => (
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
              <Quote className="w-12 h-12 text-primary-600" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
              &quot;{testimonial.text}&quot;
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-blue-500 flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-800 dark:text-white text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
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

      {/* View All Link */}
      <div className="text-center">
        <Link href="/testimonials">
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 font-semibold transition-all duration-300">
            View All Testimonials
            <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </motion.section>
  );
}
