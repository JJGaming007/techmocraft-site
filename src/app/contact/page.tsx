export const metadata = {
  title: "Contact · Techmocraft Engineering",
  description: "Get in touch for die making, repairs, milling, or molding inquiries."
};

export default function ContactPage() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/grid.svg')] bg-center bg-cover" />
      <div className="relative max-w-2xl mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-lg p-10 border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900 dark:text-white">Contact Us</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-8">
          Let&apos;s talk about how Techmocraft Engineering can help your business.
        </p>
        <form
          action="https://formsubmit.co/techmocraft7@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_next" value="https://techmocraft-site-11ud.vercel.app/thank-you" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              pattern="[\d\s+()-]{7,}"
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
