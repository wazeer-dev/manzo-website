import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manzo - Leading Wholesale Mens Fashion Manufacturers",
  description: "Manzo is a premier wholesale mens fashion manufacturer, providing high-quality wholesale male clothing and mens wear. Your trusted partner for mens wholesale clothing and modern fashion.",
  keywords: [
    "wholesale mens fashion manufacturers",
    "wholesale male clothing",
    "wholesale mens wear",
    "mens wholesale clothing",
    "wholesale mens fashion"
  ],
  openGraph: {
    title: "Manzo - Premium Wholesale Mens Fashion",
    description: "Premium wholesale mens fashion for retailers. High-quality male clothing and mens wear at wholesale prices.",
    type: "website",
    locale: "en_US",
    siteName: "Manzo",
  },
  icons: {
    icon: "/app-icon-192.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Manzo",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";
import PWAInstall from "@/components/PWAInstall";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Manzo",
              "alternateName": "Manzo Wholesale",
              "url": "https://manzo.com",
              "logo": "https://manzo.com/logo-black.webp",
              "description": "Leading wholesale mens fashion manufacturers specializing in high-quality male clothing, mens wear, and modern apparel manufacturing.",
              "brand": {
                "@type": "Brand",
                "name": "Manzo"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wholesale District",
                "addressLocality": "Cairo",
                "addressRegion": "Cairo",
                "postalCode": "12345",
                "addressCountry": "EG"
              },
              "keywords": "wholesale mens fashion manufacturers, wholesale male clothing, wholesale mens wear, mens wholesale clothing, wholesale mens fashion, Egyptian clothing manufacturer, premium mens apparel",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+20-123456789",
                "contactType": "Sales"
              },
              "sameAs": [
                "https://www.instagram.com/manzo_clothing_india_/"
              ]
            })
          }}
        />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <WhatsAppButton />
        <PWAInstall />
      </body>
    </html>
  );
}
