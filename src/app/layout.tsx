import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

// Static Metadata
export const metadata: Metadata = {
  title: {
    default: "Muhammad Hamza Ismail", // Default title
    template: "%s | Muhammad Hamza Ismail", // Template for dynamic titles
  },
  description: "Muhammad Hamza Ismail - Portfolio",
  keywords: ["portfolio", "muhammad hamza ismail", "developer", "designer"],
  authors: [{ name: "Muhammad Hamza Ismail", url: "https://yourdomain.com" }],
  openGraph: {
    title: "Muhammad Hamza Ismail",
    description: "Muhammad Hamza Ismail - Portfolio",
    url: "https://yourdomain.com", // Replace with your actual URL
    siteName: "Muhammad Hamza Ismail",
    images: [
      {
        url: "/og-image.png", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "Muhammad Hamza Ismail Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamza Ismail",
    description: "Muhammad Hamza Ismail - Portfolio",
    images: ["/twitter-image.png"], // Replace with your Twitter image
    creator: "@yourTwitterHandle", // Replace with your Twitter handle
  },
  verification: {
    google: "google_verification_code", // Replace with your Google verification code
    yandex: "yandex_verification_code", // Replace with your Yandex verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}