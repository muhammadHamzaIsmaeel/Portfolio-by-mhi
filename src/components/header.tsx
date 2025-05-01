"use client";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { trackGoal } from "fathom-client";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Service } from "@/app/types/service";
import { servicesQuery } from "@/sanity/queries";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);

  // Fetch services from Sanity
  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await client.fetch<Service[]>(servicesQuery);
      setServices(servicesData);
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/home') return;
      
      const sections = ["home", "about", "skill", "project", "services", "contactus"];
      let currentSection = null;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/home') {
      window.location.href = `/home#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = useMemo(
    () => {
      const handleHomeClick = () => {
        if (pathname === '/home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = '/home';
        }
      };
  
      const scrollToSection = (sectionId: string) => {
        if (pathname !== '/home') {
          window.location.href = `/home#${sectionId}`;
          return;
        }
  
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
  
      return [
        { 
          href: "/home", 
          label: "HOME", 
          section: "home",
          onClick: handleHomeClick
        },
        { 
          href: "#about", 
          label: "ABOUT ME", 
          section: "about",
          onClick: () => scrollToSection('about')
        },
        { 
          href: "#skill", 
          label: "SKILLS", 
          section: "skill",
          onClick: () => scrollToSection('skill')
        },
        { 
          href: "#project", 
          label: "PROJECTS", 
          section: "project",
          onClick: () => scrollToSection('project')
        },
        { 
          href: "#services", 
          label: "SERVICES", 
          section: "services",
          onClick: () => scrollToSection('services')
        },
      ];
    },
    [pathname] // Only pathname is needed as a dependency now
  );

  const handleContactClick = () => {
    trackGoal("CONTACT_BUTTON_CLICKED", 0);
    scrollToSection("contactus");
  };

  return (
    <div className="flex justify-center">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 0.8,
        }}
        className="fixed top-4 w-11/12 md:w-4/5 lg:w-3/4 z-50 bg-gradient-to-r from-violet-800/20 to-purple-800/20 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10"
      >
        <nav className="flex justify-between items-center w-full h-full px-4">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link 
              href="/" 
              aria-label="Navigate to homepage" 
              passHref
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
            >
              <Image
                src="/logo.png"
                alt="Muhammad Hamza Ismail Logo"
                width={80}
                height={80}
                className="yellow-logo cursor-pointer hover:scale-110 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex font-sans gap-6 text-lg h-full items-center">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative group h-full flex items-center"
              >
                {link.section === "services" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() =>
                      setTimeout(() => setServicesOpen(false), 300)
                    }
                  >
                    <button
                      onClick={link.onClick}
                      aria-label={`Navigate to ${link.label}`}
                      className="text-white transition duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(255,221,51,0.8)] h-full flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <span
                      className={`absolute bottom-0 h-0.5 bg-yellow-400 transition-all duration-300 
                      ${
                        activeSection === link.section || servicesOpen
                          ? "w-full left-0"
                          : "w-0 group-hover:w-full group-hover:left-0"
                      }`}
                    ></span>

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-56 origin-top-right rounded-xl bg-[#10002b]/90 backdrop-blur-xl shadow-lg border border-white/10 overflow-hidden z-50"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() =>
                          setTimeout(() => setServicesOpen(false), 300)
                        }
                      >
                        <div
                          className="absolute -top-2 left-0 right-0 h-4"
                          onMouseEnter={() => setServicesOpen(true)}
                        />
                        <div className="p-2">
                          {services.map((service) => (
                            <Link
                              key={service._id}
                              href={`/services/${service.slug}`}
                              className="block px-4 py-3 text-white hover:bg-violet-800/30 rounded-lg transition-colors duration-200"
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <span>{service.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <>
                    <button
                      onClick={link.onClick}
                      aria-label={`Navigate to ${link.label}`}
                      className="text-white transition duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(255,221,51,0.8)] h-full flex items-center"
                    >
                      {link.label}
                    </button>
                    <span
                      className={`absolute bottom-0 h-0.5 bg-yellow-400 transition-all duration-300 
                      ${
                        activeSection === link.section
                          ? "w-full left-0"
                          : "w-0 group-hover:w-full group-hover:left-0"
                      }`}
                    ></span>
                  </>
                )}
              </li>
            ))}

            <li className="h-full flex items-center">
              <button
                className="text-base px-6 py-2 text-white font-semibold bg-gradient-to-r from-violet-600 to-yellow-500 hover:from-yellow-500 hover:to-violet-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-full flex items-center"
                onClick={handleContactClick}
                aria-label="Contact us"
              >
                CONTACT US
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center h-full">
            <Sheet>
              <SheetTrigger
                className="text-white text-3xl hover:text-yellow-400 transition duration-200 flex items-center h-full p-2 rounded-full hover:bg-white/10"
                aria-label="Open menu"
              >
                ☰
              </SheetTrigger>
              <SheetContent className="bg-[#10002b]/20 backdrop-blur-xl border-l border-white/20">
                <SheetHeader>
                  <SheetTitle className="flex justify-center">
                    <Link 
                      href="/" 
                      aria-label="Navigate to homepage" 
                      passHref
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/';
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                      >
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={58}
                          height={58}
                          className="rounded-full border-2 border-yellow-400/30"
                        />
                      </motion.div>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-12">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.href}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className={`text-lg ${
                          activeSection === link.section
                            ? "text-yellow-400 font-medium"
                            : "text-white/90 hover:text-white"
                        }`}
                      >
                        {link.section === "services" ? (
                          <div className="space-y-2">
                            <button
                              onClick={link.onClick}
                              className="w-full text-left py-3 px-4 flex items-center justify-between"
                            >
                              <span className="relative">
                                {link.label}
                                {activeSection === link.section && (
                                  <motion.span
                                    layoutId="mobileMenuUnderline"
                                    className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400"
                                    transition={{
                                      type: "spring",
                                      bounce: 0.2,
                                      duration: 0.6,
                                    }}
                                  />
                                )}
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            <div className="ml-4 space-y-2">
                              {services.map((service) => (
                                <Link
                                  key={service._id}
                                  href={`/services/${service.slug}`}
                                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-violet-900/30 rounded-lg transition-colors"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <button
                            onClick={link.onClick}
                            className="w-full text-left py-3 px-4 flex items-center"
                          >
                            <span className="relative">
                              {link.label}
                              {activeSection === link.section && (
                                <motion.span
                                  layoutId="mobileMenuUnderline"
                                  className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400"
                                  transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                  }}
                                />
                              )}
                            </span>
                          </button>
                        )}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 pt-6 border-t border-white/10"
                  >
                    <button
                      onClick={handleContactClick}
                      className="w-full text-center py-3 px-6 text-white font-semibold 
                     bg-gradient-to-r from-yellow-500 to-orange-500 
                     rounded-lg shadow-lg hover:shadow-yellow-500/30 
                     transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Contact Me
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>
    </div>
  );
}

export default Header;