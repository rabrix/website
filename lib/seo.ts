import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Rabrix - Automated Lead Qualification for Realtors',
    template: '%s | Rabrix',
  },
  description: 'We chase, qualify, and book your leads so you can just show up to buyer appointments already knowing who they are. Automated WhatsApp messaging, AI caller, and calendar booking for real estate professionals.',
  keywords: [
    'lead qualification',
    'real estate leads',
    'WhatsApp automation',
    'AI caller',
    'appointment booking',
    'real estate CRM',
    'lead management',
    'realtor tools',
  ],
  authors: [{ name: 'Rabrix' }],
  creator: 'Rabrix',
  publisher: 'Rabrix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rabrix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Rabrix',
    title: 'Rabrix - Automated Lead Qualification for Realtors',
    description: 'We chase, qualify, and book your leads so you can just show up to buyer appointments already knowing who they are.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rabrix - Automated Lead Qualification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabrix - Automated Lead Qualification for Realtors',
    description: 'We chase, qualify, and book your leads so you can just show up to buyer appointments already knowing who they are.',
    images: ['/og-image.jpg'],
  },
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
};

export const generateStructuredData = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rabrix',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rabrix.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://rabrix.com'}/logos/rabrix-logo.png`,
    description: 'Automated lead qualification and appointment booking for real estate professionals',
    sameAs: [],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lead Qualification and Appointment Booking',
    provider: {
      '@type': 'Organization',
      name: 'Rabrix',
    },
    areaServed: 'US',
    description: 'Automated WhatsApp messaging, AI caller, and calendar booking for real estate leads',
  };

  return {
    organization: organizationSchema,
    service: serviceSchema,
  };
};

