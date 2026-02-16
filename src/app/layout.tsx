import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "../components/header";
import Footer from "../components/footer";

const siteUrl = "https://muhammadhamzaismail.vercel.app";

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Top Website Developer in Pakistan | Full Stack & AI Expert - Hamza Ismail",
    template: "%s | Hamza Ismail - Web Developer Pakistan",
  },
  description:
    "Hire the best website developer in Pakistan. Expert in Next.js, React, Node.js & AI automation. Professional web development services for business websites, e-commerce, custom web apps. Get a free quote today!",
  keywords: [
    // Primary Keywords (High Intent)
    "website developer",
    "web developer",
    "hire web developer",
    "freelance web developer",
    "website developer near me",
    "best website developer",

    // Location Based Keywords
    "web developer Pakistan",
    "website developer Karachi",
    "web developer in Karachi",
    "Pakistani web developer",
    "freelance web developer Pakistan",
    "hire web developer Pakistan",

    // Service Keywords
    "website development services",
    "custom website development",
    "business website developer",
    "ecommerce website developer",
    "professional web developer",
    "affordable web developer",

    // Technology Keywords
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "full stack developer",
    "MERN stack developer",
    "TypeScript developer",
    "JavaScript developer",

    // AI Keywords
    "AI developer",
    "AI agent developer",
    "AI automation expert",
    "chatbot developer",

    // Branded Keywords
    "Muhammad Hamza Ismail",
    "Hamza Ismail developer",
    "MHI developer",
  ],
  authors: [
    {
      name: "Muhammad Hamza Ismail",
      url: siteUrl,
    },
  ],
  creator: "Muhammad Hamza Ismail",
  publisher: "Muhammad Hamza Ismail",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhammad Hamza Ismail - Web Developer",
    title: "Top Website Developer in Pakistan | Full Stack & AI Expert",
    description:
      "Looking for a professional website developer? Get custom websites, e-commerce solutions, and AI-powered web applications. Expert Next.js & React developer in Pakistan.",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Hamza Ismail - Professional Website Developer in Pakistan",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Website Developer in Pakistan | Hire Expert Web Developer",
    description:
      "Professional website development services. Expert in Next.js, React, Node.js & AI. Get custom websites, e-commerce & web apps. Contact for free consultation!",
    images: [`${siteUrl}/og.png`],
    creator: "@m_hamza_ismail",
    site: "@m_hamza_ismail",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-G5ddtXRaUJx0BJPU8-z-nyOuS7ue7G20M4Tk8nrcjE",
    yandex: "80b55bcc445a8018",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-PK": siteUrl,
    },
  },
  category: "technology",
  classification: "Web Development Services",
};

// Multiple Schema.org Structured Data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Muhammad Hamza Ismail",
  alternateName: ["Hamza Ismail", "MHI"],
  url: siteUrl,
  image: `${siteUrl}/hamza.png`,
  jobTitle: "Full Stack Web Developer & AI Specialist",
  description:
    "Professional website developer with expertise in Next.js, React, Node.js, and AI automation. Providing top-quality web development services in Pakistan and globally.",
  email: "m.hamzashaikh6067@gmail.com",
  telephone: "+923152121984",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/muhammadhamzaismaeel",
    "https://www.linkedin.com/in/muhammadhamzaismail",
    "https://www.instagram.com/muhammad_hamza_ismail",
    "https://www.facebook.com/muhammad.hamza.ismail.2025",
    "https://x.com/m_hamza_ismail",
  ],
  knowsAbout: [
    "Web Development",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "AI Development",
    "Full Stack Development",
    "E-commerce Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Muhammad Hamza Ismail - Professional Web Developer",
  description: "Portfolio and services of Muhammad Hamza Ismail, a professional website developer in Pakistan",
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#service`,
  name: "Muhammad Hamza Ismail - Web Development Services",
  image: `${siteUrl}/og.png`,
  url: siteUrl,
  telephone: "+923152121984",
  email: "m.hamzashaikh6067@gmail.com",
  description:
    "Professional website development services including custom websites, e-commerce solutions, web applications, and AI integration.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8607,
    longitude: 67.0011,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  serviceType: [
    "Website Development",
    "Web Application Development",
    "E-commerce Development",
    "AI Integration",
    "Full Stack Development",
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Development",
          description: "Professional custom website development using modern technologies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Website Development",
          description: "Full-featured online store development with payment integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Web Applications",
          description: "Intelligent web applications with AI automation and chatbots",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
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
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              websiteSchema,
              professionalServiceSchema,
              breadcrumbSchema,
            ]),
          }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
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
