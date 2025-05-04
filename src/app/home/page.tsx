"use client";

import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Head from "next/head";

// Dynamic imports for better code splitting
const About = dynamic(() => import('../about/page'), { 
  loading: () => <div className="min-h-screen bg-[#10002b]" />
});
const Skills = dynamic(() => import('../skills/page'));
const Project = dynamic(() => import('../project/page'));
const Contact = dynamic(() => import('../contact-us/page'));

function Homepage() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // SEO Metadata
  const seoConfig = {
    title: "Muhammad Hamza Ismail | Front-End Developer & UI Specialist",
    description: "Professional portfolio showcasing innovative web solutions with Next.js, React, and modern design principles.",
    keywords: "frontend developer, Next.js expert, React developer, web designer, portfolio, JavaScript developer",
    url: "https://muhammadhamzaismail.vercel.app",
    image: "/logojpg"
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:image" content={seoConfig.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoConfig.url} />
        <meta property="twitter:title" content={seoConfig.title} />
        <meta property="twitter:description" content={seoConfig.description} />
        <meta property="twitter:image" content={seoConfig.image} />

        {/* Canonical URL */}
        <link rel="canonical" href={seoConfig.url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Hamza Ismail",
            "jobTitle": "Front-End Developer",
            "url": seoConfig.url,
            "sameAs": [
              "https://github.com/muhammadHamzaIsmaeel",
              "https://www.linkedin.com/in/muhammadhamzaismail",
            ],
            "knowsAbout": ["Next.js", "React", "TypeScript", "Tailwind CSS"]
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
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  opacity: 0.2
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  transition: {
                    duration: Math.random() * 40 + 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              />
            ))}
          </div>

          {/* Optimized Background Image */}
          <div className="fixed inset-0 -z-20">
            <Image
              src="/bg2.jpg"
              alt="Abstract developer background"
              fill
              priority
              quality={80}
              className="blur-sm mix-blend-multiply bg-violet-500/20"
              sizes="100vw"
            />
          </div>

          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-around px-4">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-0 md:ml-4 text-center md:text-left text-white max-w-2xl"
            >
              <motion.h4 
                className="text-yellow-400 text-xl md:text-2xl mt-8 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                &lt;Welcome /&gt;
              </motion.h4>
              
              <motion.h1
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent mb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Muhammad Hamza Ismail
              </motion.h1>
              
              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative inline-block">
                  <span className="text-lg md:text-xl relative z-10 px-4 py-2 bg-[#10002b]/80 rounded-full">
                    Front-End Developer
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-yellow-500 blur-md opacity-70 -z-10"></span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  I create <span className="text-yellow-300">high-performance</span> web experiences with 
                  <span className="text-purple-300"> innovative design</span> and 
                  <span className="text-blue-300"> cutting-edge technology</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a href="/cv.pdf" download aria-label="Download my CV">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-violet-600 to-yellow-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/20 flex items-center gap-2 mx-auto md:mx-0"
                  >
                    Download CV
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4 mt-8 justify-center md:justify-start"
              >
                {[
                  {
                    href: "https://github.com/muhammadHamzaIsmaeel",
                    icon: <FaGithub />,
                    label: "GitHub"
                  },
                  {
                    href: "https://www.linkedin.com/in/muhammadhamzaismail",
                    icon: <FaLinkedin />,
                    label: "LinkedIn"
                  },
                  {
                    href: "https://www.instagram.com/muhammad_hamza_ismail",
                    icon: <FaInstagram />,
                    label: "Instagram"
                  },
                  {
                    href: "https://www.facebook.com/muhammad.hamza.ismail.2025",
                    icon: <FaFacebook />,
                    label: "Facebook"
                  },
                ].map(({ href, icon, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label} profile`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                  >
                    <span className="text-xl text-white">{icon}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Skills Bubble */}
              <motion.div 
                className="mt-8 inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-sm font-mono text-yellow-300">
                    Next.js • Tailwind CSS • React • TypeScript • Sanity • Stripe
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex justify-center items-center md:mt-0 mt-24 md:-mb-0 -mb-24"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="relative group"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-yellow-500 animate-spin-slow opacity-70 blur-lg"></div>
                <div className="relative rounded-full p-1 overflow-hidden">
                  <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72 border-4 border-transparent group-hover:border-yellow-400 transition-all duration-500">
                    <Image
                      src="/hamza.jpg"
                      alt="Professional portrait of Muhammad Hamza Ismail"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-violet-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          </section>

          {/* Other Sections */}
          <section id="about" className="bg-[#10002b]">
            <About />
          </section>

          <section id="skills" className="bg-transparent">
            <Skills />
          </section>

          <section id="projects" className="bg-[#10002b]">
            <Project />
          </section>

          <section id="contact" className="bg-transparent">
            <Contact />
          </section>
        </motion.main>
      </LazyMotion>
    </>
  );
}

export default Homepage;