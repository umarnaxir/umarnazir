import type { Metadata } from 'next';
import { LegalPage } from '../components/LegalPage/LegalPage';
import { termsAndConditionsData } from '@/lib/data/terms.data';

const siteUrl = 'https://umarnazir.vercel.app';
const pageUrl = `${siteUrl}/terms-and-conditions`;
const title = 'Terms & Conditions';
const description =
  'Terms & Conditions for using Umar Nazir’s portfolio website. Learn about permitted use, intellectual property, services, and contact erumarnazir@gmail.com or +91 705-173-2616.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Terms and Conditions',
    'Umar Nazir terms',
    'website terms of use',
    'portfolio terms',
    'legal terms',
    'Baramulla',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${title} | Umar Nazir`,
    description,
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${title} | Umar Nazir`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${title} | Umar Nazir`,
        description,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Umar Nazir',
          url: siteUrl,
        },
        dateModified: '2026-07-23',
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Terms & Conditions',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'Person',
        name: 'Umar Nazir',
        email: 'erumarnazir@gmail.com',
        telephone: '+91-705-173-2616',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Baramulla',
          addressRegion: 'Jammu and Kashmir',
          addressCountry: 'IN',
        },
        url: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPage content={termsAndConditionsData} />
    </>
  );
}
