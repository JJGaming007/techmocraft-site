'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileUp, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function QuotePage() {
  const [selectedService, setSelectedService] = useState('');
  const [urgency, setUrgency] = useState('');
  const [fileName, setFileName] = useState('');

  const services = [
    'Die Making',
    'Die Repairing',
    'CNC Milling',
    'Plastic Molding',
    'Tool Maintenance',
    'Custom Fabrication',
  ];

  const urgencyOptions = [
    { value: 'standard', label: 'Standard (4-8 weeks)' },
    { value: 'priority', label: 'Priority (2-4 weeks)' },
    { value: 'rush', label: 'Rush (1-2 weeks)' },
    { value: 'urgent', label: 'Urgent (Less than 1 week)' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('/bg-pattern.png')] bg-center bg-cover" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-semibold mb-6">
            Get a Quote
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Request a <span className="bg-gradient-to-r from-primary-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Quote</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fill out the form below with your project details, and we&apos;ll get back to you with a detailed quote within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Response</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We respond to all quote requests within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <FileUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">File Upload</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Upload technical drawings, CAD files, or specifications (PDF, DWG, DXF, STEP).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Obligation</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Getting a quote is completely free with no commitment required.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 sm:p-10 border border-gray-100 dark:border-gray-700">
              <form
                action="https://formsubmit.co/techmocraft7@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Quote Request - Techmocraft Engineering" />
                <input type="hidden" name="_next" value="https://techmocraft-site-11ud.vercel.app/thank-you" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                {/* Contact Information */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[\d\s+()-]{7,}"
                      placeholder="+91 XXX XXX XXXX"
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Urgency <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="urgency"
                      required
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      {urgencyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Specifications */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Material Type
                    </label>
                    <input
                      type="text"
                      name="material"
                      placeholder="e.g., D2 Tool Steel, Aluminum 7075"
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      placeholder="Number of units"
                      className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Dimensions / Specifications
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    placeholder="e.g., 500mm x 400mm x 300mm, ±0.001mm tolerance"
                    className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Attach Files (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="attachment"
                      accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 rounded-xl px-4 py-6 cursor-pointer hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
                    >
                      <FileUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      <span className="font-medium">
                        {fileName || 'Click to upload drawings or specifications'}
                      </span>
                    </label>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Accepted formats: PDF, DWG, DXF, STEP, JPG, PNG (Max 10MB)
                  </p>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Budget Range (Optional)
                  </label>
                  <select
                    name="budget"
                    className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                    <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                    <option value="above-5l">Above ₹5,00,000</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="project_details"
                    rows={5}
                    required
                    placeholder="Please provide detailed information about your project requirements, tolerances, special finishes, or any other relevant details..."
                    className="w-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-blue-500 hover:from-primary-700 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Request Quote
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
