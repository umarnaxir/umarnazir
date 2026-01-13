import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AOSInit } from "./components/AOSInit";
import { ThemeProvider } from "./components/ThemeProvider";
import StyledComponentsRegistry from "./components/StyledComponentsRegistry";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umar Nazir - Software Engineer & SEO Executive",
  description: "Software Engineer & SEO Executive with 2+ years experience building scalable web & apps, optimizing search results, and working with React & Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} data-theme="dark" suppressHydrationWarning>
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
