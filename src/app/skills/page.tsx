"use client";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

const SkillsPage: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const frontendSkills = [
    "Next.js 15", "React", "TypeScript", "JavaScript", 
    "Tailwind CSS", "Shadcn UI", "HTML", "CSS", "Vite"
  ];

  const backendSkills = [
    "Node.js", "Express.js", "MongoDB", "MySQL", 
    "REST APIs", "Python"
  ];

  const aiSkills = [
    "OpenAI Agent SDK", "FastAPI", "Pandas", "NumPy"
  ];

  const professionalSkills = [
    "Analytical Thinking", "Critical Thinking", "Creative Thinking",
    "Problem-Solving", "Decision-Making", "Strategic Planning",
    "Time Management", "Adaptability", "Collaboration",
    "Communication", "Leadership", "Continuous Learning"
  ];

  return (
    <div id="skills" className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-hidden">
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-light tracking-widest uppercase mb-6 inline-block">
              My Expertise
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
              TECHNICAL <br />
              <span className="text-neutral-500">SKILLS</span>
            </h1>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-xs tracking-[0.3em] text-neutral-600 uppercase mb-6">
              Frontend Development
            </h2>
            <div className="flex flex-wrap gap-6">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white hover:text-black transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-xs tracking-[0.3em] text-neutral-600 uppercase mb-6">
              Backend Development
            </h2>
            <div className="flex flex-wrap gap-6">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white hover:text-black transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI & Automation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-xs tracking-[0.3em] text-neutral-600 uppercase mb-6">
              AI & Automation
            </h2>
            <div className="flex flex-wrap gap-6">
              {aiSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white hover:text-black transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-10 border-t border-white/5"
          >
            <h2 className="text-xs tracking-[0.3em] text-neutral-600 uppercase mb-6">
              Professional Skills
            </h2>
            <div className="flex flex-wrap gap-6">
              {professionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white hover:text-black transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SkillsPage;