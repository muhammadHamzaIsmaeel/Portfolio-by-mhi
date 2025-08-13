"use client";

import Image from "next/image";
import Head from "next/head";
import { motion, Variants } from "framer-motion";

export default function IndependenceDayPage() {
  // Define animation variants with proper typing
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as const } // Explicitly type ease as a valid easing function
    },
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: i * 0.2, 
        ease: "easeOut" as const // Explicitly type ease
      },
    }),
  };

  return (
    <>
      <Head>
        <title>Happy Independence Day Pakistan 🇵🇰 2025 - Muhammad Hamza Ismail</title>
        <meta
          name="description"
          content="Celebrate Pakistan's 78th Independence Day on 14 August 2025 with Muhammad Hamza Ismail. Explore our journey to freedom, key milestones, inspiring quotes, and more."
        />
        <meta
          name="keywords"
          content="Pakistan Independence Day, 14 August 2025, Muhammad Hamza Ismail, Pakistan History, Web Developer Pakistan, AI Solutions"
        />
        <meta property="og:title" content="Happy Independence Day Pakistan 🇵🇰 2025 - Muhammad Hamza Ismail" />
        <meta
          property="og:description"
          content="Join Muhammad Hamza Ismail to celebrate Pakistan's 78th Independence Day with history, milestones, and patriotic quotes."
        />
        <meta property="og:image" content="/flag.jpeg" />
        <meta property="og:url" content="http://muhammadhamzaismail.vercel.app/independence-day" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Independence Day Pakistan 🇵🇰 2025" />
        <meta name="twitter:description" content="Celebrate 14 August 2025 with Muhammad Hamza Ismail." />
        <meta name="twitter:image" content="/flag-pakistan-bg.jpg" />
        <link rel="canonical" href="http://muhammadhamzaismail.vercel.app/independence-day" />
      </Head>

      {/* Page Wrapper with Pakistan Flag Background */}
      <main className="relative min-h-screen text-white flex flex-col bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/flag.jpeg')" }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Hero Section */}
        <motion.section
          className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Animated Fireworks Effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl md:text-4xl text-yellow-300"
                initial={{ y: -200, opacity: 0, scale: 0.5 }}
                animate={{
                  y: "120vh",
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  delay: Math.random() * 3,
                  ease: "easeOut" as const,
                  repeat: Infinity,
                }}
                style={{ left: `${Math.random() * 100}%` }}
              >
                <Image
                src="/pak.png"
                alt="Pakistan Flag"
                width={30}
                height={30}
                
                />
              </motion.span>
            ))}
          </div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-yellow-300 drop-shadow-2xl tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" as const }}
          >
            Happy 78th Independence Day
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl lg:text-3xl max-w-3xl text-gray-100 font-medium"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            Celebrating Pakistan&apos;s Freedom – 14th August 2025
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" as const }}
          >
            <Image
              src="/JF17Thunder.png"
              alt="Pakistan Flag"
              width={420}
              height={220}
              className="animate-wave"
            />
          </motion.div>
        </motion.section>

        {/* History Section */}
        <motion.section
          className="relative z-10 py-24 px-4 md:px-16 lg:px-32 bg-white bg-opacity-10 backdrop-blur-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-12 drop-shadow-lg">
            Our Path to Freedom
          </h2>
          <div className="max-w-4xl mx-auto text-center text-gray-100 text-lg md:text-xl leading-relaxed">
            <p>
              On 14th August 1947, Pakistan was born as a sovereign nation, led by Quaid-e-Azam Muhammad Ali Jinnah. The Lahore Resolution of 1940 set the stage for a homeland where Muslims could thrive. Our journey was fueled by unity, sacrifice, and an unyielding spirit of freedom.
            </p>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className="relative z-10 py-24 px-4 md:px-16 lg:px-32 bg-white bg-opacity-10 backdrop-blur-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-12 drop-shadow-lg">
            Milestones of Our Nation
          </h2>
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
            {[
              { year: "1940", event: "Lahore Resolution: The vision for Pakistan was born." },
              { year: "1947", event: "Independence: Pakistan became a free nation." },
              { year: "1956", event: "First Constitution: Foundation of the Islamic Republic." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,0,0.5)] transition-all duration-300"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-yellow-300 mb-4">{item.year}</h3>
                <p className="text-gray-100">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts Section */}
        <motion.section
          className="relative z-10 py-24 px-4 md:px-16 lg:px-32 bg-white bg-opacity-10 backdrop-blur-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-12 drop-shadow-lg">
            Amazing Facts About Pakistan
          </h2>
          <ul className="max-w-4xl mx-auto list-none space-y-6 text-gray-100 text-lg md:text-xl">
            {[
              "Home to K2, the world's second-highest peak, standing at 8,611 meters.",
              "Pakistan’s national anthem, adopted in 1954, is one of the shortest, lasting about 80 seconds.",
              "The fifth most populous nation, Pakistan boasts a vibrant cultural tapestry.",
            ].map((fact, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-yellow-300 text-2xl">★</span>
                {fact}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Quotes Section */}
        <motion.section
          className="relative z-10 py-24 px-4 md:px-16 lg:px-32 bg-white bg-opacity-10 backdrop-blur-lg"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-300 mb-12 drop-shadow-lg">
            Words That Inspire Us
          </h2>
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { quote: "With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.", author: "Quaid-e-Azam Muhammad Ali Jinnah" },
              { quote: "We are a nation with our own distinct culture and civilization.", author: "Allama Iqbal" },
              { quote: "Pakistan is the heart of Asia and the meeting point of civilizations.", author: "Liaquat Ali Khan" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,0,0.5)] transition-all duration-300 text-center"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-gray-100 italic mb-4">&quot;{item.quote}&quot;</p>
                <p className="text-yellow-300 font-semibold">- {item.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-wave {
          animation: wave 2.5s infinite ease-in-out;
          transform-origin: center;
        }

        /* Parallax effect for background */
        .bg-fixed {
          background-attachment: fixed;
        }

        @media (max-width: 768px) {
          .bg-fixed {
            background-attachment: scroll; /* Fallback for mobile */
          }
        }
      `}</style>
    </>
  );
}
