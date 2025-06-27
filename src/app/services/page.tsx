"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { client } from "@/sanity/lib/client";
import { Service } from "@/app/types/service";
import { servicesQuery } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ServicesPage: FC = () => {
  // State for services data from Sanity
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await client.fetch<Service[]>(servicesQuery);
        setServices(servicesData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services");
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development & AI Agent Integration",
    provider: {
      "@type": "Person",
      name: "Muhammad Hamza Ismail",
      url: "https://muhammadhamzaismail.vercel.app",
      sameAs: [
        "https://linkedin.com/in/muhammadhamzaismail",
        "https://github.com/muhammadhamzaismaeel",
        "https://twitter.com/YourTwitterHandle", // Replace with your Twitter
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
    },
    description:
      "Professional website development, ecommerce solutions, business websites, and AI agent integration services by Muhammad Hamza Ismail in Pakistan and globally.",
    areaServed: "Worldwide",
    offers: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `https://muhammadhamzaismail.vercel.app/services/${service.slug}`,
      },
    })),
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent"></div>
          <p className="mt-4 text-gray-300">Loading services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-white">{error}</h1>
          <p className="text-gray-300 mb-6">
            There was an issue loading the services.
          </p>
          <Link
            href="/home"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-yellow-500 text-gray-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Services | Muhammad Hamza Ismail - Web & AI Solutions</title>
        <meta
          name="description"
          content="Explore professional services by Muhammad Hamza Ismail: website development, ecommerce solutions, business websites, and AI agent integration in Pakistan and globally."
        />
        <meta
          name="keywords"
          content="Muhammad Hamza Ismail, MHI, web developer Pakistan, website development, ecommerce website, business website, AI agent development, Next.js developer, Tailwind CSS, Sanity CMS, Stripe integration"
        />
        <meta
          property="og:title"
          content="Services | Muhammad Hamza Ismail - Web & AI Solutions"
        />
        <meta
          property="og:description"
          content="Professional website development, ecommerce, business websites, and AI agent integration by Muhammad Hamza Ismail."
        />
        <meta
          property="og:url"
          content="https://muhammadhamzaismail.vercel.app/services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://muhammadhamzaismail.vercel.app/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services | Muhammad Hamza Ismail - Web & AI Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover expert web development and AI agent services by Muhammad Hamza Ismail."
        />
        <meta
          name="twitter:image"
          content="https://muhammadhamzaismail.vercel.app/twitter-image.jpg"
        />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <link
          rel="canonical"
          href="https://muhammadhamzaismail.vercel.app/services"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-900 text-white py-28 px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            My <span className="text-yellow-400">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover professional web development and AI-driven solutions tailored to your needs, delivering modern, responsive, and innovative digital experiences in Pakistan and globally.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              {service.image && (
                <div className="relative h-48">
                  <Image
                    src={urlFor(service.image).url()}
                    alt={service.image.alt || service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3 text-white">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Learn more about ${service.title}`}
                  className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-violet-600 to-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact me to discuss your web development or AI agent integration needs and get a custom quote.
          </p>
          <Link
            href="/home#contactus"
            aria-label="Contact Muhammad Hamza Ismail for services"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;