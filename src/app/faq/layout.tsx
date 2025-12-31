import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about our die making, CNC milling, and precision manufacturing services. Learn about our processes, pricing, timelines, quality standards, and more.',
  openGraph: {
    title: 'FAQ | Techmocraft Engineering',
    description: 'Frequently asked questions about our precision engineering services and processes.',
    url: '/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
