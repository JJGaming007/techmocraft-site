import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You · Techmocraft Engineering",
  description: "Your message has been received successfully."
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
      <p className="text-gray-600 mb-6">
        We’ve received your message and will get back to you as soon as possible.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}