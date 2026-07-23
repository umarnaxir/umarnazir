import type { Metadata } from 'next';
import { LegalPage } from '../components/LegalPage/LegalPage';
import { privacyPolicyData } from '@/lib/data/privacy.data';

const siteUrl = 'https://umarnazir.vercel.app';
const pageUrl = `${siteUrl}/privacy-policy`;
const title = 'Privacy Policy';
const description =
  'Read how Umar Nazir collects, uses, and protects information on umarnazir.vercel.app. Contact erumarnazir@gmail.com or +91 705-173-2616 for privacy requests.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Privacy Policy',
    'Umar Nazir privacy',
    'portfolio privacy policy',
    'data protection',
    'website privacy',
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

export default function PrivacyPolicyPage() {
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
            name: 'Privacy Policy',
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
      <LegalPage content={privacyPolicyData} />
    </>
  );
}
