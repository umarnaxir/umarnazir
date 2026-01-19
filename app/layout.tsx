import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { AOSInit } from "./components/AOSInit";
import { ThemeProvider } from "./components/ThemeProvider";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const lexend = localFont({
  src: "./assets/Lexend-VariableFont_wght.ttf",
  variable: "--font-lexend",
  display: "swap",
  weight: "100 900",
});

const siteUrl = "https://umarnazir.vercel.app";
const siteName = "Umar Nazir - Software Engineer & SEO Executive";
const siteDescription = "Software Engineer & SEO Executive with 2+ years building high-performance websites and mobile applications, delivering scalable solutions.";
const siteImage = `${siteUrl}/images/me.JPG`;
const keywords = [
  "Umar Nazir",
  "Software Engineer",
  "SEO Executive",
  "React Developer",
  "Next.js Developer",
  "React Native Developer",
  "Web Developer",
  "Mobile App Developer",
  "SEO Optimization",
  "JavaScript Developer",
  "UI/UX Designer",
  "Portfolio Website",
  "Baramulla",
  "Jammu and Kashmir",
  "Software Development in India",
  "Software Development in Jammu and Kashmir",
  "Software Development in Kashmir",
  "Software Developer in Kashmir",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: keywords,
  authors: [{ name: "Umar Nazir", url: siteUrl }],
  creator: "Umar Nazir",
  publisher: "Umar Nazir",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: "Umar Nazir - Software Engineer & SEO Executive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [siteImage],
    creator: "@umarnazir",
  },
  verification: {
    google: "K5WPaPu_n40Lp7BlSC2vph3oTrM3QzSlCbkCSZpA2iE",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${lexend.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Umar Nazir",
              "jobTitle": "Software Engineer & SEO Executive",
              "description": "Software Engineer & SEO Executive with 2+ years building high-performance websites & mobile apps, optimizing digital presence, and delivering scalable solutions.",
              "url": "https://umarnazir.vercel.app",
              "image": "https://umarnazir.vercel.app/images/me.JPG",
              "email": "sd.umarnazir@gmail.com",
              "telephone": "+91-705-173-2616",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Baramulla",
                "addressRegion": "Jammu and Kashmir",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/umarnazir",
                "https://www.linkedin.com/in/umarnazir"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Web Development",
                "Mobile App Development",
                "SEO Optimization",
                "React.js",
                "Next.js",
                "React Native",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Firebase",
                "MongoDB",
                "UI/UX Design",
                "Digital Marketing"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Government College of Engineering and Technology, Safapora, Ganderbal (GCET Kashmir)",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Safapora",
                  "addressRegion": "Jammu and Kashmir",
                  "addressCountry": "IN"
                }
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "degree",
                "educationalLevel": "Bachelor's Degree",
                "about": "Computer Science Engineering"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Saibbyweb",
                  "jobTitle": "Software Engineer",
                  "startDate": "2025-01"
                },
                {
                  "@type": "Organization",
                  "name": "NexGen Developers",
                  "jobTitle": "Founder & CEO",
                  "startDate": "2025-05"
                }
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "India"
                },
                "skills": [
                  "React.js",
                  "Next.js",
                  "React Native",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "Firebase",
                  "MongoDB",
                  "SEO",
                  "UI/UX Design",
                  "API Integration",
                  "Web Development",
                  "Mobile Development"
                ]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Umar Nazir - Software Engineer & SEO Executive",
              "url": "https://umarnazir.vercel.app",
              "description": "Software Engineer & SEO Executive with 2+ years building high-performance websites & mobile apps, optimizing digital presence, and delivering scalable solutions.",
              "author": {
                "@type": "Person",
                "name": "Umar Nazir"
              },
              "publisher": {
                "@type": "Person",
                "name": "Umar Nazir"
              },
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://umarnazir.vercel.app/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "name": "Umar Nazir - Software Engineer & SEO Executive",
              "url": "https://umarnazir.vercel.app",
              "mainEntity": {
                "@type": "Person",
                "name": "Umar Nazir",
                "jobTitle": "Software Engineer & SEO Executive",
                "image": "https://umarnazir.vercel.app/images/me.JPG",
                "email": "sd.umarnazir@gmail.com",
                "telephone": "+91-705-173-2616",
                "url": "https://umarnazir.vercel.app"
              }
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <AOSInit />
            {children}
            <Toaster
              position="top-right"
              reverseOrder={false}
            />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
