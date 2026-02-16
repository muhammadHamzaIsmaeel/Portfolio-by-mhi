"use client";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FaCode, FaRobot, FaServer, FaBrain } from "react-icons/fa";

const AboutPage: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="about" className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-hidden">
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
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-light tracking-widest uppercase mb-6 inline-block">
              About Me
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-12">
              FULL STACK <br />
              <span className="text-neutral-500">DEVELOPER</span> & AI
              <br />
              SPECIALIST
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
              Hi, I&apos;m <span className="text-white font-medium">Muhammad Hamza Ismail</span> — a
              passionate developer specializing in{" "}
              <span className="text-white font-medium">full-stack web development</span> and{" "}
              <span className="text-white font-medium">AI automation</span>.
            </p>

            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              I build scalable, modern applications using{" "}
              <span className="text-white font-medium">Next.js 15</span>,{" "}
              <span className="text-white font-medium">React</span>, and{" "}
              <span className="text-white font-medium">TypeScript</span> on the frontend,
              backed by robust solutions with{" "}
              <span className="text-white font-medium">Node.js</span>,{" "}
              <span className="text-white font-medium">Express.js</span>, and databases like{" "}
              <span className="text-white font-medium">MongoDB</span> and{" "}
              <span className="text-white font-medium">MySQL</span>.
            </p>

            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              On the AI side, I develop intelligent{" "}
              <span className="text-white font-medium">Agentic AI systems</span> using{" "}
              <span className="text-white font-medium">OpenAI Agent SDK</span>,{" "}
              <span className="text-white font-medium">Python</span>,{" "}
              <span className="text-white font-medium">FastAPI</span>, and data science tools
              like <span className="text-white font-medium">Pandas</span> and{" "}
              <span className="text-white font-medium">NumPy</span>.
            </p>

            <p className="text-lg text-neutral-400 font-light leading-relaxed">
              I&apos;m driven by solving complex problems through elegant code and creating
              digital experiences that make a real impact. Whether it&apos;s architecting a
              full-stack application or building AI-powered automation workflows, I bring
              creativity, technical depth, and a commitment to excellence.
            </p>
          </motion.div>

          {/* Expertise Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-16 pt-10 border-t border-white/5"
          >
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5">
              <FaCode className="text-white" />
              <span className="text-sm font-medium">Full Stack Development</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5">
              <FaRobot className="text-white" />
              <span className="text-sm font-medium">AI Automation</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5">
              <FaServer className="text-white" />
              <span className="text-sm font-medium">Backend Architecture</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5">
              <FaBrain className="text-white" />
              <span className="text-sm font-medium">Agentic AI Systems</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;