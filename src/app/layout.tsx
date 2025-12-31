import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BackToTop } from "@/components/BackToTop";
import { Breadcrumb } from "@/components/Breadcrumb";
import "./globals.css";

// Comprehensive SEO metadata
export const metadata = {
  metadataBase: new URL('https://techmocraft-site-11ud.vercel.app'),
  title: {
    default: 'Techmocraft Engineering - Precision Die Making & CNC Milling Services',
    template: '%s | Techmocraft Engineering',
  },
  description: 'Leading precision engineering company in Mumbai specializing in die making, die repairing, CNC milling, plastic molding, and custom fabrication. 15+ years of experience, 500+ projects completed.',
  keywords: ['die making', 'CNC milling', 'plastic molding', 'die repair', 'tool maintenance', 'custom fabrication', 'precision engineering', 'Mumbai', 'India', 'tool steel', 'manufacturing'],
  authors: [{ name: 'Techmocraft Engineering' }],
  creator: 'Techmocraft Engineering',
  publisher: 'Techmocraft Engineering',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://techmocraft-site-11ud.vercel.app',
    title: 'Techmocraft Engineering - Precision Die Making & Manufacturing',
    description: 'Leading precision engineering company in Mumbai. Expert die making, CNC milling, plastic molding services. 15+ years experience, 500+ projects completed.',
    siteName: 'Techmocraft Engineering',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Techmocraft Engineering - Precision Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techmocraft Engineering - Precision Die Making & Manufacturing',
    description: 'Leading precision engineering company. Expert die making, CNC milling, plastic molding services.',
    images: ['/banner.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add verification codes when available
    // google: 'verification_code',
    // yandex: 'verification_code',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className="bg-custom-grid bg-repeat bg-top text-gray-800 dark:text-gray-100">
        <Navbar />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
