"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    { 
      name: "GitHub", 
      icon: "/.icon/github.png", // Changed path
      url: "https://github.com/muhammadHamzaIsmaeel",
      color: "hover:bg-gray-800"
    },
    { 
      name: "LinkedIn", 
      icon: "/.icon/linkedin.png", // Changed path
      url: "https://www.linkedin.com/in/muhammadhamzaismail",
      color: "hover:bg-blue-700"
    },
    { 
      name: "Instagram", 
      icon: "/.icon/instagram.png", // Changed path
      url: "https://www.instagram.com/muhammad_hamza_ismail",
      color: "hover:bg-pink-600"
    },
    { 
      name: "Facebook", 
      icon: "/.icon/facebook.png", // Changed path
      url: "https://www.facebook.com/muhammad.hamza.ismail.2025",
      color: "hover:bg-blue-600"
    }
  ];

  return (
    <footer className="bg-[#10002b] border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 md:mb-0"
          >
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="rounded-lg"
            />
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Muhammad Hamza Ismail. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links - Fixed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${link.color}`}
                aria-label={link.name}
              >
                <Image 
                  src={link.icon} 
                  alt={link.name} 
                  width={20} 
                  height={20} 
                  className="w-5 h-5" // Simplified sizing
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;