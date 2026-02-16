"use client";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import About from "./about/page";
import Skills from "./skills/page";
import ProjectsSection from "./project/page";
import Contact from "./contact-us/page";

const HomePage: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Hero Section - Landing Page Style */}
      <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-hidden">
        {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
          {/* Radial Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
        </div>

        <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* --- LEFT CONTENT (TYPOGRAPHY) --- */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-light tracking-widest uppercase mb-6 inline-block">
                  Available for New Projects
                </span>
                <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
                  MUHAMMAD <br />
                  <span className="text-neutral-500">HAMZA</span> ISMAIL
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed"
              >
                Full-stack developer crafting{" "}
                <span className="text-white font-medium">scalable web applications</span> and{" "}
                <span className="text-white font-medium">intelligent AI systems</span>. 
                I architect end-to-end solutions with{" "}
                <span className="text-white font-medium">Next.js</span>,{" "}
                <span className="text-white font-medium">React</span>, and{" "}
                <span className="text-white font-medium">Node.js</span>, powered by modern databases 
                and AI automation frameworks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-6 items-center"
              >
                {/* Download CV Button */}
                <a href="/cv.pdf" download>
                  <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                    <span className="relative z-10 flex items-center gap-2">
                      DOWNLOAD CV
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 group-hover:translate-y-1 transition-transform"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/muhammadhamzaismaeel"
                    target="_blank"
                    className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammadhamzaismail"
                    target="_blank"
                    className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/muhammad_hamza_ismail"
                    target="_blank"
                    className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/muhammad.hamza.ismail.2025"
                    target="_blank"
                    className="p-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* --- RIGHT CONTENT (CREATIVE IMAGE/AVATAR) --- */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative aspect-square"
              >
                {/* Decorative Rings */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* Image Container */}
                <div className="absolute inset-10 rounded-2xl overflow-hidden bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700 border border-white/20 shadow-2xl shadow-white/5">
                  <Image
                    src="/hamza.png"
                    alt="Muhammad Hamza Ismail"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Stats Floating Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 bg-[#111] border border-white/10 p-5 rounded-xl backdrop-blur-md"
                >
                  <p className="text-3xl font-bold tracking-tighter">50+</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest">
                    Projects Done
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* --- BOTTOM MARQUEE / SKILLS BAR --- */}
          <div className="mt-32 pt-10 border-t border-white/5">
            <p className="text-center text-xs tracking-[0.3em] text-neutral-600 uppercase mb-8">
              Full Stack Expertise
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale contrast-125">
              {[
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xl md:text-2xl font-bold tracking-tighter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Other Sections - Home Page Content */}
      <section id="about" className="bg-gray-900">
        <About />
      </section>

      <section id="skill" className="bg-transparent">
        <Skills />
      </section>

      <section id="project" className="bg-gray-900">
        <ProjectsSection />
      </section>

      <section id="contactus" className="bg-transparent">
        <Contact />
      </section>

      {/* FAQ Section for SEO */}
      <section className="relative bg-[#0a0a0a] text-white py-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12">
              FREQUENTLY <span className="text-neutral-500">ASKED</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "What web development services do you offer?",
                  a: "I offer complete web development services including custom website development, e-commerce solutions, business websites, web applications, AI integration, and full-stack development using Next.js, React, Node.js, and modern technologies.",
                },
                {
                  q: "How much does a website cost?",
                  a: "Website costs vary based on project requirements. A basic business website starts from affordable rates, while complex e-commerce or custom web applications are priced based on features and functionality. Contact me for a free quote tailored to your needs.",
                },
                {
                  q: "How long does it take to build a website?",
                  a: "A simple business website typically takes 1-2 weeks, while complex web applications or e-commerce sites may take 4-8 weeks depending on features, design complexity, and content readiness.",
                },
                {
                  q: "Do you provide website maintenance?",
                  a: "Yes, I offer ongoing website maintenance and support services including updates, security patches, performance optimization, and content updates to keep your website running smoothly.",
                },
                {
                  q: "Can you help with AI integration?",
                  a: "Absolutely! I specialize in AI automation and integration including chatbots, AI agents, automated workflows, and intelligent features using OpenAI, Python, and modern AI frameworks.",
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5"
                >
                  <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                  <p className="text-neutral-400 font-light">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What web development services do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "I offer complete web development services including custom website development, e-commerce solutions, business websites, web applications, AI integration, and full-stack development using Next.js, React, Node.js, and modern technologies.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a website cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Website costs vary based on project requirements. A basic business website starts from affordable rates, while complex e-commerce or custom web applications are priced based on features and functionality. Contact me for a free quote tailored to your needs.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to build a website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A simple business website typically takes 1-2 weeks, while complex web applications or e-commerce sites may take 4-8 weeks depending on features, design complexity, and content readiness.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide website maintenance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, I offer ongoing website maintenance and support services including updates, security patches, performance optimization, and content updates to keep your website running smoothly.",
                },
              },
              {
                "@type": "Question",
                name: "Can you help with AI integration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! I specialize in AI automation and integration including chatbots, AI agents, automated workflows, and intelligent features using OpenAI, Python, and modern AI frameworks.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default HomePage;