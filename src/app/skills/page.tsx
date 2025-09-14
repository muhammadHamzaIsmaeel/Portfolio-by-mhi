"use client";

import { motion } from "framer-motion";
import Head from "next/head";

// Skill interface
interface Skill {
  name: string;
}

// Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

const Skills: React.FC = () => {
  const professionalSkills: Skill[] = [
    { name: "Analytical Thinking" },
    { name: "Critical Thinking" },
    { name: "Creative Thinking" },
    { name: "Decision-Making" },
    { name: "Problem-Solving" },
    { name: "Logical Reasoning" },
    { name: "Strategic Planning" },
    { name: "Research" },
    { name: "Time Management" },
    { name: "Attention to Detail" },
    { name: "Adaptability" },
    { name: "Collaboration" },
    { name: "Communication" },
    { name: "Leadership" },
    { name: "Risk Management" },
    { name: "Continuous Learning" },
  ];

  const webDevelopment: Skill[] = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "jQuery" },
    { name: "Bootstrap" },
    { name: "TypeScript" },
    { name: "Express.js" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Vite" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Tailwind CSS" },
    { name: "Clerk" },
    { name: "Shadcn UI" },
    { name: "Vercel" },
    { name: "Git" },
  ];

  const artificialIntelligence: Skill[] = [
    { name: "Python" },
    { name: "OpenAI Agent SDK" },
    { name: "NumPy" },
    { name: "Pandas" },
    { name: "FastAPI" },
  ];

  const seoConfig = {
    title: "Skills | Muhammad Hamza Ismail - Web Developer in Pakistan",
    description:
      "Explore the technical and professional skills of Muhammad Hamza Ismail, including expertise in Web Development, Artificial Intelligence, and more.",
    url: "https://muhammadhamzaismail.vercel.app/skills",
    image: "/logo.png",
  };

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
      </Head>

      <div className="min-h-screen text-white py-16 px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-violet-500 bg-clip-text text-transparent">
            My Technical Expertise
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my skills in front-end development, frameworks, and tools, crafted to deliver modern, high-performance web solutions.
          </p>
        </motion.div>

        {/* Skills Sections */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          {/* Professional Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-center mb-6">Professional Skills</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
              {professionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 border border-yellow-400 text-yellow-300 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </section>

          {/* Web Development */}
          <section>
            <h2 className="text-2xl font-semibold text-center mb-6">Web Development</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
              {webDevelopment.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 border border-yellow-400 text-yellow-300 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </section>

          {/* Artificial Intelligence */}
          <section>
            <h2 className="text-2xl font-semibold text-center mb-6">Artificial Intelligence</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
              {artificialIntelligence.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 border border-yellow-400 text-yellow-300 rounded-lg text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
