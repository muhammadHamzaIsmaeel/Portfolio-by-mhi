"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from "react";
import Head from "next/head";

const HomePage: FC = () => {
  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Hamza Ismail",
    jobTitle: "Web Developer & AI Agent Specialist",
    url: "https://muhammadhamzaismail.vercel.app",
    sameAs: [
      "https://linkedin.com/in/muhammadhamzaismail",
      "https://github.com/muhammadhamzaismaeel",
      "https://x.com/m_hamza_ismail", // Replace with your Twitter
    ],
    knowsAbout: [
      "Next.js",
      "Tailwind CSS",
      "Sanity CMS",
      "Stripe",
      "React",
      "Frontend Development",
      "Web Design",
      "Ecommerce Development",
      "Business Websites",
      "AI Agent Integration",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK", // Pakistan
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Muhammad Hamza Ismail | Web Developer & AI Agent Specialist</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Hamza Ismail, offering expert website development, ecommerce solutions, business websites, and AI agent integration services in Pakistan and globally."
        />
        <meta
          name="keywords"
          content="Muhammad Hamza Ismail, MHI, web developer Pakistan, website development, ecommerce website, business website, AI agent development, Next.js developer, Tailwind CSS expert, Sanity CMS, Stripe integration, frontend developer"
        />
        <meta
          property="og:title"
          content="Muhammad Hamza Ismail | Web & AI Solutions"
        />
        <meta
          property="og:description"
          content="Discover professional web development, ecommerce, and AI agent services by Muhammad Hamza Ismail."
        />
        <meta
          property="og:url"
          content="https://muhammadhamzaismail.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://muhammadhamzaismail.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muhammad Hamza Ismail | Web Developer & AI Specialist"
        />
        <meta
          name="twitter:description"
          content="Expert web development and AI agent solutions by Muhammad Hamza Ismail. Contact for ecommerce and business websites!"
        />
        <meta
          name="twitter:image"
          content="https://muhammadhamzaismail.vercel.app/twitter-image.jpg"
        />
        <meta name="twitter:creator" content="@YourTwitterHandle" /> {/* Replace with your Twitter handle */}
        <link
          rel="canonical"
          href="https://muhammadhamzaismail.vercel.app"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Main Content */}
      <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Optimized Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/bg2.jpg"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80"
          aria-label="Background video showcasing web development and AI projects"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Improved overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center px-6 relative z-10 max-w-4xl mx-auto"
        >
          {/* Main Heading with SEO keywords */}
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-medium mb-6 tracking-tight"
          >
            Hello, I&apos;m{" "}
            <span className="text-yellow-400 font-semibold">
              Muhammad Hamza Ismail
            </span>
          </motion.h1>

          {/* Subheading with keywords */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I craft modern websites and AI-driven solutions, specializing in
            ecommerce, business websites, and innovative AI agent integration for
            clients in Pakistan and worldwide.
          </motion.p>

          {/* Optimized CTA Button */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <Link
              href="/services"
              aria-label="Explore web development and AI agent services"
              className="group"
            >
              <button className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-yellow-500 text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
                Explore My Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;