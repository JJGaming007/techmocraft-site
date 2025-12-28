import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote - Get Free Manufacturing Quote',
  description: 'Request a free quote for die making, CNC milling, plastic molding, or custom fabrication services. Upload drawings and specifications. 24-hour response time guaranteed.',
  openGraph: {
    title: 'Request a Quote | Techmocraft Engineering',
    description: 'Get a free, no-obligation quote for your precision manufacturing project.',
    url: '/quote',
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
