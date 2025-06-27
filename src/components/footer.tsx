"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/queries";
import { Service } from "@/app/types/service";

function Footer() {
  const [services, setServices] = useState<Service[]>([]);

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await client.fetch<Service[]>(servicesQuery);
      setServices(servicesData);
    };
    fetchServices();
  }, []);

  const navLinks = [
    { href: "/home", label: "Home", rel: "home" },
    { href: "/home#about", label: "About", rel: "nofollow" },
    { href: "/home#skill", label: "Skills", rel: "nofollow" },
    { href: "/home#project", label: "Projects", rel: "nofollow" },
    { href: "/services", label: "Services", rel: "nofollow" },
    { href: "/home#contactus", label: "Contact", rel: "nofollow" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "/.icons/github.png",
      url: "https://github.com/muhammadHamzaIsmaeel",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "/.icons/linkedin.png",
      url: "https://www.linkedin.com/in/muhammadhamzaismail",
      color: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: "/.icons/instagram.png",
      url: "https://www.instagram.com/muhammad_hamza_ismail",
      color: "hover:bg-pink-600",
    },
    {
      name: "Facebook",
      icon: "/.icons/facebook.png",
      url: "https://www.facebook.com/muhammad.hamza.ismail.2025",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-violet-500/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/" aria-label="Navigate to Muhammad Hamza Ismail homepage" rel="home">
              <Image
                src="/logo.png"
                alt="Muhammad Hamza Ismail Logo"
                width={60}
                height={60}
                className="rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Muhammad Hamza Ismail. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 text-center md:text-left">
              Crafting innovative web & AI solutions in Pakistan and globally.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    rel={link.rel}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-center md:text-left">
              {services.map((service) => (
                <li key={service._id}>
                  <Link
                    href={`/services/${service.slug}`}
                    rel="nofollow"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
                    aria-label={`Explore ${service.title} service`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${link.color}`}
                  aria-label={`Follow Muhammad Hamza Ismail on ${link.name}`}
                >
                  <Image
                    src={link.icon}
                    alt={`${link.name} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-300 text-sm text-center md:text-left">
              <p>Email: <a href="mailto:your.email@example.com" className="hover:text-yellow-400">m.hamzashaikh6067@gmail.com</a></p>
              <p>Phone: <a href="tel:+923001234567" className="hover:text-yellow-400">+92 315 2121984</a></p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-violet-500/30 text-center"
        >
          <p className="text-sm text-gray-400">
            Built by Muhammad Hamza Ismail
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;