import { Metadata } from "next";

const siteUrl = "https://muhammadhamzaismail.vercel.app";

export const metadata: Metadata = {
  title: "Contact - Hire Expert Web Developer | Get Free Quote",
  description:
    "Contact Muhammad Hamza Ismail for professional web development services. Get a free quote for your website, e-commerce, or web application project. Expert Next.js and React developer in Pakistan.",
  keywords: [
    "hire web developer",
    "contact web developer",
    "web development quote",
    "hire Next.js developer",
    "hire React developer",
    "freelance web developer contact",
    "website development inquiry",
    "web developer Karachi contact",
    "hire full stack developer",
    "get website quote",
  ],
  openGraph: {
    title: "Contact - Hire Professional Web Developer | Free Consultation",
    description:
      "Ready to start your project? Contact Muhammad Hamza Ismail for professional web development services. Get a free consultation and quote.",
    url: `${siteUrl}/contact-us`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Contact Web Developer - Muhammad Hamza Ismail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Hire Expert Web Developer",
    description:
      "Get in touch for professional web development. Free consultation and quote for your project.",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: `${siteUrl}/contact-us`,
  },
};

// Local Business Schema for Contact Page
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Muhammad Hamza Ismail",
  description: "Contact page for web development services",
  url: `${siteUrl}/contact-us`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Muhammad Hamza Ismail - Web Development Services",
    telephone: "+923152121984",
    email: "m.hamzashaikh6067@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
