"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  const navLinks = [
    { href: "/", label: "Home", rel: "home" },
    { href: "/about", label: "About", rel: "nofollow" },
    { href: "/skills", label: "Skills", rel: "nofollow" },
    { href: "/project", label: "Projects", rel: "nofollow" },
    { href: "/contact-us", label: "Contact", rel: "nofollow" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/muhammadHamzaIsmaeel",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/muhammadhamzaismail",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/muhammad_hamza_ismail",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/muhammad.hamza.ismail.2025",
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <Link href="/" aria-label="Navigate to Muhammad Hamza Ismail homepage" rel="home">
              <Image
                src="/logo.png"
                alt="Muhammad Hamza Ismail Logo"
                width={60}
                height={60}
                className="mb-4 hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
              Full Stack Developer & AI Specialist crafting innovative digital solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all"
                  aria-label={`Follow Muhammad Hamza Ismail on ${link.name}`}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-medium tracking-wider uppercase mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    rel={link.rel}
                    className="text-sm text-neutral-400 hover:text-white transition-colors font-light"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-medium tracking-wider uppercase mb-6 text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li>
                <a href="mailto:m.hamzashaikh6067@gmail.com" className="hover:text-white transition-colors">
                  m.hamzashaikh6067@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+923152121984" className="hover:text-white transition-colors">
                  +92 315 2121984
                </a>
              </li>
              <li>Karachi, Pakistan</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-neutral-500 font-light">
            © {new Date().getFullYear()} Muhammad Hamza Ismail. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;