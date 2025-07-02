"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Head from "next/head";

// Dynamic imports for better code splitting
const About = dynamic(() => import("../about/page"), {
  loading: () => <div className="min-h-screen bg-gray-900" />,
});
const Skills = dynamic(() => import("../skills/page"));
const Project = dynamic(() => import("../project/page"));
const Contact = dynamic(() => import("../contact-us/page"));

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};

function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // SEO Metadata
  const seoConfig = {
    title: "Muhammad Hamza Ismail | Web Developer & UI Specialist in Pakistan",
    description:
      "Discover innovative web solutions by Muhammad Hamza Ismail, a skilled front-end developer specializing in Next.js, React, and modern UI/UX design.",
    keywords:
      "web developer Pakistan, front-end developer, Next.js expert, React developer, UI/UX designer, portfolio, JavaScript developer, Tailwind CSS, Sanity CMS",
    url: "https://muhammadhamzaismail.vercel.app",
    image: "/logo.png",
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Muhammad Hamza Ismail" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta
          property="og:image"
          content={`${seoConfig.url}${seoConfig.image}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoConfig.url} />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta
          name="twitter:image"
          content={`${seoConfig.url}${seoConfig.image}`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={seoConfig.url} />

        {/* Preload Critical Assets */}
        <link
          rel="preload"
          href="/hamza.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/bg1.jpg"
          as="image"
          type="image/jpeg"
          fetchPriority="high"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Hamza Ismail",
            "jobTitle": "Front-End Developer & UI/UX Specialist",
            "url": seoConfig.url,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK",
              "addressLocality": "Lahore",
            },
            "sameAs": [
              "https://github.com/muhammadHamzaIsmaeel",
              "https://www.linkedin.com/in/muhammadhamzaismail",
              "https://www.instagram.com/muhammad_hamza_ismail",
              "https://www.facebook.com/muhammad.hamza.ismail.2025",
            ],
            "knowsAbout": [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Sanity CMS",
              "UI/UX Design",
              "Web Development",
            ],
          })}
        </script>
      </Head>

      <LazyMotion features={domAnimation}>
        <motion.main className="relative">
          {/* Background Elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-violet-600/20 to-yellow-500/20"
                initial={{
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  opacity: 0.3,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  transition: {
                    duration: Math.random() * 30 + 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              />
            ))}
          </div>

          {/* Optimized Background Image */}
          <div className="fixed inset-0 -z-20">
            <Image
              src="/bg1.jpg"
              alt="Abstract developer background"
              fill
              priority
              quality={75}
              className="blur-sm mix-blend-overlay bg-gray-900/50 object-cover"
              sizes="100vw"
            />
          </div>

          {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:pt-24 md:flex-row md:justify-around md:items-center md:gap-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              className="relative flex justify-center items-center mb-8 md:mb-0 order-first md:order-2"
            >
              <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-yellow-500 animate-pulse opacity-60 blur-lg"></div>
                <div className="relative rounded-full p-1.5 overflow-hidden">
                  <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-transparent group-hover:border-yellow-400/50 transition-all duration-500">
                    <Image
                      src="/hamza.jpg"
                      alt="Professional portrait of Muhammad Hamza Ismail"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 80vw, 40vw"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-violet-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="flex flex-col items-center text-center md:text-left md:items-start max-w-lg md:max-w-xl order-last md:order-1"
            >
              <motion.h4
                variants={itemVariants}
                className="text-yellow-400 text-lg md:text-xl font-mono mb-4"
              >
                Welcome to My Portfolio
              </motion.h4>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent mb-6"
              >
                Muhammad Hamza Ismail
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-6">
                <div className="relative inline-block">
                  <span className="text-base md:text-lg px-4 py-2 bg-gray-900/80 rounded-full text-white font-medium">
                    Website Developer
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-yellow-500 blur-md opacity-50 -z-10"></span>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-md"
              >
                I create{" "}
                <span className="text-yellow-300">high-performance</span> web
                experiences with{" "}
                <span className="text-purple-300">innovative design</span> and{" "}
                <span className="text-blue-300">cutting-edge technology</span>.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-8">
                <a
                  href="/cv.pdf"
                  download
                  aria-label="Download Muhammad Hamza Ismail's CV"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-violet-600 to-yellow-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/30 flex items-center gap-2 mx-auto md:mx-0"
                  >
                    Download CV
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="flex gap-4 justify-center md:justify-start"
              >
                {[
                  {
                    href: "https://github.com/muhammadHamzaIsmaeel",
                    icon: <FaGithub />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/muhammadhamzaismail",
                    icon: <FaLinkedin />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://www.instagram.com/muhammad_hamza_ismail",
                    icon: <FaInstagram />,
                    label: "Instagram",
                  },
                  {
                    href: "https://www.facebook.com/muhammad.hamza.ismail.2025",
                    icon: <FaFacebook />,
                    label: "Facebook",
                  },
                ].map(({ href, icon, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Muhammad Hamza Ismail's ${label} profile`}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300"
                  >
                    <span className="text-xl text-white">{icon}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Skills Bubble */}
              <motion.div
                variants={itemVariants}
                className="mt-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-4 py-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-white/10">
                  <span className="text-sm font-mono text-yellow-300">
                    Next.js • Tailwind CSS • React • TypeScript • Sanity • Stripe
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Other Sections */}
          <section id="about" className="bg-gray-900">
            <About />
          </section>

          <section id="skill" className="bg-transparent">
            <Skills />
          </section>

          <section id="project" className="bg-gray-900">
            <Project />
          </section>

          <section id="contactus" className="bg-transparent">
            <Contact />
          </section>
        </motion.main>
      </LazyMotion>
    </>
  );
}
export default Homepage;