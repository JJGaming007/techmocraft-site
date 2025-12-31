import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - What Our Customers Say',
  description: 'Read testimonials from satisfied clients of Techmocraft Engineering. See why leading manufacturers trust us for precision die making, CNC milling, and tooling solutions.',
  openGraph: {
    title: 'Client Testimonials | Techmocraft Engineering',
    description: 'Hear from our satisfied clients about their experience working with Techmocraft Engineering.',
    url: '/testimonials',
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
