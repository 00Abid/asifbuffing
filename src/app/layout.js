import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://asifbuffing.vercel.app'),
  title: {
    default: 'ASIF BUFFING WORKS - Professional Utensil Buffing & Polishing Services',
    template: '%s | ASIF BUFFING WORKS'
  },
  description: 'Leading utensil buffing and polishing company specializing in mirror finish for kitchen utensils, silverware restoration, and commercial cookware. Expert buffing services with state-of-the-art machinery.',
  keywords: ['utensil buffing', 'polishing services', 'mirror finish', 'silverware restoration', 'commercial cookware buffing', 'stainless steel polishing', 'kitchen utensil restoration', 'professional buffing'],
  authors: [{ name: 'ASIF BUFFING WORKS' }],
  creator: 'ASIF BUFFING WORKS',
  publisher: 'ASIF BUFFING WORKS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asifbuffing.vercel.app',
    title: 'ASIF BUFFING WORKS - Professional Utensil Buffing & Polishing Services',
    description: 'Leading utensil buffing and polishing company specializing in mirror finish for kitchen utensils, silverware restoration, and commercial cookware.',
    siteName: 'ASIF BUFFING WORKS',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'ASIF BUFFING WORKS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASIF BUFFING WORKS - Professional Utensil Buffing Services',
    description: 'Expert utensil buffing and polishing services. Mirror finish for kitchen utensils, silverware restoration, and commercial cookware.',
    images: ['/logo.webp'],
    creator: '@asifbuffing',
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
  alternates: {
    canonical: 'https://asifbuffing.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://asifbuffing.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://asifbuffing.vercel.app" />
        <link rel="alternate" hrefLang="en-US" href="https://asifbuffing.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://asifbuffing.vercel.app" />

        {/* Social Media & Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ASIF BUFFING WORKS",
              "url": "https://asifbuffing.vercel.app",
              "logo": "https://asifbuffing.vercel.app/logo.webp",
              "sameAs": [
                "https://www.facebook.com/asifbuffingworks",
                "https://www.instagram.com/asifbuffingworks",
                "https://twitter.com/asifbuffing",
                "https://www.linkedin.com/company/asifbuffingworks",
                "https://www.youtube.com/@asifbuffingworks"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9096769473",
                "contactType": "Customer Service",
                "email": "rajabuffingworks02@gmail.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Marathi"]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
