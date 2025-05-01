"use client";

import { useEffect, useState } from "react";
import About from "../about/page";
import Skills from "../skills/page";
import Project from "../project/page";
import Contact from "../contact-us/page";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"; // Import icons

function Homepage() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.main className="relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg2.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
          className="blur-sm mix-blend-multiply bg-violet-500/20"
        />
      </div>

      {/* Home Section */}
      <section id="home" className="relative md:mt-0 min-h-screen flex flex-col-reverse md:flex-row items-center justify-around">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-0 md:ml-4 text-center md:text-left text-white"
        >
          <h4 className="text-yellow-500 font-semibold text-2xl md:text-3xl">
            Hi There,
          </h4>
          <h2 className="text-3xl md:text-4xl md:px-0 px-3 font-bold text-white">
            I&apos;m Muhammad Hamza Ismail
          </h2>
          <h5 className="text-lg md:text-xl mt-2">Front-End Developer</h5>
          <a href="/cv.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-yellow-500 hover:from-violet-700 hover:to-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
            >
              Download CV
            </motion.button>
          </a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex mb-5 md:mb-0 mt-10 gap-6 justify-center md:justify-start"
          >
            {[
              {
                href: "https://github.com/MuhammadHamzaSheikh6",
                icon: <FaGithub />,
                bg: "bg-gray-800",
                hover: "hover:bg-gray-700",
              },
              {
                href: "https://www.linkedin.com/in/muhammadhamzasheikh",
                icon: <FaLinkedin />,
                bg: "bg-blue-700",
                hover: "hover:bg-blue-600",
              },
              {
                href: "https://www.instagram.com/muhammad_hamza_sh8ikh",
                icon: <FaInstagram />,
                bg: "bg-pink-600",
                hover: "hover:bg-pink-500",
              },
              {
                href: "https://www.facebook.com/profile.php?id=100073351960056",
                icon: <FaFacebook />,
                bg: "bg-blue-600",
                hover: "hover:bg-blue-500",
              },
            ].map(({ href, icon, bg, hover }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`h-12 w-12 flex items-center justify-center transition-all duration-300 ${bg} rounded-full ${hover} transform hover:scale-110 hover:shadow-lg`}
              >
                <span className="text-white text-xl">{icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center items-center md:mt-0 mt-24 md:-mb-0 -mb-24"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-yellow-500 blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

            {/* Image Container */}
            <motion.div className="relative rounded-full border-4 border-transparent group-hover:border-yellow-500 transition-all duration-300 overflow-hidden w-72 h-72">
              <Image
                className="object-cover w-full h-full rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                src="/hamza.jpeg"
                alt="Hamza"
                width={288}
                height={288}
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-yellow-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Other Sections with Proper Background Handling */}
      <section className="bg-[#10002b]">
        <About />
      </section>

      <section className="bg-transparent">
        <Skills />
      </section>

      <section className="bg-[#10002b]">
        <Project />
      </section>

      <section className="bg-transparent">
        <Contact />
      </section>
    </motion.main>
  );
}

export default Homepage;
