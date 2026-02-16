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
import { useMemo } from "react";
import { trackGoal } from "fathom-client";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const navLinks = useMemo(() => {
    const handleHomeClick = () => {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.href = "/";
      }
    };

    return [
      {
        href: "/",
        label: "HOME",
        section: "home",
        onClick: handleHomeClick,
      },
      {
        href: "/",
        label: "ABOUT",
        section: "about",
        onClick: () => window.location.href = "/about",
      },
      {
        href: "/",
        label: "SKILLS",
        section: "skills",
        onClick: () => window.location.href = "/skills",
      },
      {
        href: "/",
        label: "PROJECTS",
        section: "project",
        onClick: () => window.location.href = "/project",
      },
    ];
  }, [pathname]);

  const handleContactClick = () => {
    trackGoal("CONTACT_BUTTON_CLICKED", 0);
    if (pathname !== "/") {
      window.location.href = "/#contactus";
      return;
    }
    const element = document.getElementById("contactus");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
        className="fixed top-4 w-11/12 md:w-4/5 lg:w-3/4 z-50 bg-[#0a0a0a]/80 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/10"
      >
        <nav className="flex justify-between items-center w-full h-full px-4">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Link
              href="/"
              aria-label="Navigate to Muhammad Hamza Ismail homepage"
              rel="home"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              <Image
                src="/logo.png"
                alt="Muhammad Hamza Ismail Logo"
                width={80}
                height={80}
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex font-sans gap-8 text-sm h-full items-center">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative group h-full flex items-center"
              >
                <Link
                  href={link.href}
                  rel={link.section === "home" ? "home" : "nofollow"}
                  aria-label={`Navigate to ${link.label} section`}
                  className="text-white transition duration-300 group-hover:text-white/70 h-full flex items-center font-light tracking-wider"
                  onClick={link.onClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="h-full flex items-center">
              <button
                className="px-6 py-2 text-black font-medium bg-white rounded-full hover:bg-white/90 transition-all duration-300 h-full flex items-center text-sm tracking-wider"
                onClick={handleContactClick}
                aria-label="Contact Muhammad Hamza Ismail"
              >
                CONTACT
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center h-full">
            <Sheet>
              <SheetTrigger
                className="text-white text-3xl hover:text-white/70 transition duration-200 flex items-center h-full p-2 rounded-full hover:bg-white/10"
                aria-label="Open navigation menu"
              >
                ☰
              </SheetTrigger>
              <SheetContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10">
                <SheetHeader>
                  <SheetTitle className="flex justify-center">
                    <Link
                      href="/"
                      aria-label="Navigate to Muhammad Hamza Ismail homepage"
                      rel="home"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "/";
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                      >
                        <Image
                          src="/logo.png"
                          alt="Muhammad Hamza Ismail Logo"
                          width={58}
                          height={58}
                          className="rounded-full border-2 border-white/20"
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
                        className="text-lg text-neutral-400 hover:text-white"
                      >
                        <Link
                          href={link.href}
                          rel={link.section === "home" ? "home" : "nofollow"}
                          className="w-full text-left py-3 px-4 flex items-center font-light"
                          onClick={link.onClick}
                        >
                          {link.label}
                        </Link>
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
                      className="w-full text-center py-3 px-6 text-black font-medium bg-white rounded-lg hover:bg-white/90 transition-all duration-300"
                    >
                      Contact Me
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