import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakruthi Real Estates | Premium Properties in India",
  description: "Discover premium real estate properties across India. Browse through our exclusive collection of residential and commercial properties, apartments, villas, and land for sale.",
  keywords: "real estate, properties, apartments, villas, commercial properties, land for sale, real estate India, property investment, premium properties, real estate agents",
  authors: [{ name: "Prakruthi Real Estates" }],
  creator: "Prakruthi Real Estates",
  publisher: "Prakruthi Real Estates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prakruthirealestates.com',
    siteName: 'Prakruthi Real Estates',
    title: 'Prakruthi Real Estates | Premium Properties in India',
    description: 'Discover premium real estate properties across India. Browse through our exclusive collection of residential and commercial properties.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Prakruthi Real Estates Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prakruthi Real Estates | Premium Properties in India',
    description: 'Discover premium real estate properties across India. Browse through our exclusive collection of residential and commercial properties.',
    images: ['/logo.png'],
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
  verification: {
    google: 'your-google-site-verification', // You'll need to replace this with your actual Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
