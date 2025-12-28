'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // General Questions
  {
    category: 'General',
    question: 'What is Techmocraft Engineering?',
    answer: 'Techmocraft Engineering is a precision manufacturing company specializing in die making, die repairing, CNC milling, plastic molding, tool maintenance, and custom fabrication. With over 15 years of experience, we serve clients across various industries with high-quality tooling solutions.',
  },
  {
    category: 'General',
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including automotive, aerospace, consumer products, industrial equipment, electronics, and packaging. Our versatile capabilities allow us to handle projects from various manufacturing sectors.',
  },
  {
    category: 'General',
    question: 'Where is your facility located?',
    answer: 'Our manufacturing facility is located at 123 Techmocraft Industrial Zone, Mumbai, Maharashtra, India. We welcome clients to visit our facility for consultations and facility tours by appointment.',
  },

  // Services
  {
    category: 'Services',
    question: 'What materials can you work with?',
    answer: 'We work with a wide variety of materials including tool steels (D2, H13, P20), stainless steel, aluminum alloys (6061, 7075), mild steel, brass, copper, and various engineering plastics. If you have a specific material requirement, please contact us to discuss feasibility.',
  },
  {
    category: 'Services',
    question: 'Do you offer CAD design services?',
    answer: 'Yes, we provide CAD design and engineering support services. Our experienced engineers can help optimize your designs for manufacturability, create 3D models from 2D drawings, or develop custom tooling solutions from scratch.',
  },
  {
    category: 'Services',
    question: 'Can you handle both small and large production runs?',
    answer: 'Absolutely! We handle everything from single prototype pieces to large production runs. Our flexible manufacturing capabilities and experienced team allow us to efficiently serve projects of all sizes.',
  },
  {
    category: 'Services',
    question: 'What file formats do you accept?',
    answer: 'We accept a wide range of file formats including PDF, DWG, DXF, STEP, IGES, STL, Parasolid, and native CAD files from SolidWorks, AutoCAD, and CATIA. If you have a different format, please contact us.',
  },

  // Pricing & Timeline
  {
    category: 'Pricing',
    question: 'How much do your services cost?',
    answer: 'Pricing varies based on project complexity, materials, tolerances, quantity, and timeline requirements. We provide detailed, transparent quotes after reviewing your specifications. Request a free quote through our quote request form for an accurate estimate.',
  },
  {
    category: 'Pricing',
    question: 'Do you charge for quotes?',
    answer: 'No, all quotes are completely free with no obligation. We review your requirements, specifications, and drawings to provide an accurate, detailed quote at no cost.',
  },
  {
    category: 'Pricing',
    question: 'What are your payment terms?',
    answer: 'Our standard payment terms are 50% advance and 50% upon completion. For established clients and large orders, we offer flexible payment terms. We accept bank transfers, checks, and digital payments.',
  },

  // Timeline & Delivery
  {
    category: 'Timeline',
    question: 'What are typical lead times?',
    answer: 'Lead times vary by project complexity and current workload. Typical timelines are: Simple die repairs (1-2 weeks), Standard die making (4-8 weeks), CNC milling projects (2-4 weeks), and Custom fabrication (3-6 weeks). Rush services are available for urgent requirements.',
  },
  {
    category: 'Timeline',
    question: 'Do you offer rush or expedited services?',
    answer: 'Yes, we offer rush and expedited services for urgent projects. Rush service availability depends on our current production schedule. Contact us with your timeline requirements, and we\'ll do our best to accommodate your needs.',
  },
  {
    category: 'Timeline',
    question: 'Can I track my project status?',
    answer: 'Yes, we provide regular project updates via email and phone. For large projects, we offer detailed progress reports with photos and measurements at key milestones. You\'re also welcome to visit our facility to inspect work in progress.',
  },

  // Technical
  {
    category: 'Technical',
    question: 'What tolerances can you achieve?',
    answer: 'Our CNC equipment and skilled craftsmen can achieve tolerances as tight as ±0.001mm (±0.00004") for critical features. Standard tolerances are ±0.01mm. We can discuss specific tolerance requirements for your project.',
  },
  {
    category: 'Technical',
    question: 'What surface finishes do you offer?',
    answer: 'We offer various surface finishes including as-machined, polished, ground, powder coated, and heat treated surfaces. Special finishes like chrome plating, nitriding, and EDM texturing can be arranged through our trusted partners.',
  },
  {
    category: 'Technical',
    question: 'Do you provide inspection reports?',
    answer: 'Yes, we provide detailed inspection reports including dimensional measurements, material certifications, and quality documentation upon request. We use calibrated measuring equipment including CMM, micrometers, and optical comparators.',
  },

  // Quality & Support
  {
    category: 'Quality',
    question: 'What quality certifications do you have?',
    answer: 'We maintain strict quality standards and follow ISO 9001:2015 quality management principles. Our facility uses calibrated equipment, documented processes, and rigorous inspection procedures to ensure consistent quality.',
  },
  {
    category: 'Quality',
    question: 'What is your quality guarantee?',
    answer: 'We guarantee that all work meets the agreed-upon specifications. If any issues arise due to our workmanship or materials, we will repair or remake the part at no additional cost. Customer satisfaction is our top priority.',
  },
  {
    category: 'Quality',
    question: 'Do you offer warranty on repairs?',
    answer: 'Yes, all die repairs come with a warranty against defects in workmanship. The warranty period varies based on the type of repair and application. Typical warranty periods range from 3 to 12 months.',
  },
];

const categories = ['All', 'General', 'Services', 'Pricing', 'Timeline', 'Technical', 'Quality'];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Help Center
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Frequently Asked <span className="bg-gradient-to-r from-primary-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, processes, and capabilities.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mt-1">
                    <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 dark:text-white text-lg mb-1">
                      {faq.question}
                    </h3>
                    {selectedCategory === 'All' && (
                      <span className="inline-block text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                        {faq.category}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFAQs.length === 0 && (
          <div className="text-center py-16">
            <HelpCircle className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No questions found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-blue-500 rounded-2xl p-12 shadow-xl text-center"
        >
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Reach out to us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Contact Us
              </span>
            </Link>
            <Link href="/quote">
              <span className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Request a Quote
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
