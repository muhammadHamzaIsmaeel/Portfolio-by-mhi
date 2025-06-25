import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "../components/header";
import Footer from "../components/footer";

// Static Metadata
export const metadata: Metadata = {
  title: {
    default: "Muhammad Hamza Ismail | Web Developer & AI Agent Specialist",
    template: "%s | Muhammad Hamza Ismail - Web & AI Solutions",
  },
  description:
    "Portfolio of Muhammad Hamza Ismail, a professional web developer offering website development, e-commerce solutions, business websites, and AI agent integration services in Pakistan and globally.",
  keywords: [
    "Muhammad Hamza Ismail",
    "MHI",
    "web developer Pakistan",
    "website development",
    "ecommerce website",
    "business website",
    "AI agent development",
    "Next.js developer",
    "portfolio",
  ],
  authors: [
    {
      name: "Muhammad Hamza Ismail",
      url: "https://muhammadhamzaismail.vercel.app",
    },
  ],
  openGraph: {
    title: "Muhammad Hamza Ismail | Web & AI Solutions",
    description:
      "Explore the portfolio of Muhammad Hamza Ismail for professional website development, e-commerce, business sites, and AI agent services.",
    url: "https://muhammadhamzaismail.vercel.app",
    siteName: "Muhammad Hamza Ismail",
    images: [
      {
        url: "https://muhammadhamzaismail.vercel.app/og.png", // Upload a 1200x630px image to your /public folder
        width: 1200,
        height: 630,
        alt: "Muhammad Hamza Ismail Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza Ismail | Web Developer & AI Specialist",
    description:
      "Professional web development and AI agent services by Muhammad Hamza Ismail. Contact for business websites, e-commerce, and more!",
    images: ["https://muhammadhamzaismail.vercel.app/og.png"], // Upload a 1200x600px image
    creator: "@m_hamza_ismail", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-G5ddtXRaUJx0BJPU8-z-nyOuS7ue7G20M4Tk8nrcjE", // Get from Google Search Console
    yandex: "80b55bcc445a8018", // Get from Yandex Webmaster
  },
  alternates: {
    canonical: "https://muhammadhamzaismail.vercel.app", // Ensures no duplicate content issues
  },
};

// Structured Data (Schema.org) for Portfolio
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Hamza Ismail",
  url: "https://muhammadhamzaismail.vercel.app",
  jobTitle: "Web Developer & AI Agent Specialist",
  description:
    "Muhammad Hamza Ismail offers professional website development, e-commerce solutions, business websites, and AI agent integration services.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK", // Pakistan
  },
  sameAs: [
    "https://x.com/m_hamza_ismail", // Add your social profiles
    "https://www.linkedin.com/in/muhammadhamzaismail", // Add LinkedIn if available
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}