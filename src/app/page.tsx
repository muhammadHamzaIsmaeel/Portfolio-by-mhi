"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FC } from "react";

const Wel: FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video with Subtle Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-80"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-6 relative z-10 max-w-4xl mx-auto"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-medium mb-6 tracking-tight"
        >
          Hello, I&apos;m <span className="text-yellow-400 font-semibold">Muhammad Hamza Ismail</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I craft modern web experiences with focus on performance and design.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <Link href="/home" aria-label="View my work">
            <button className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-yellow-500 text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto shadow-md hover:shadow-lg">
              View My Work
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Wel;