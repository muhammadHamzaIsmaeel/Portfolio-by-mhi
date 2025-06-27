"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Head from "next/head";

// Skill interface with icon
interface Skill {
  name: string;
  percentage: number;
  description: string;
  icon: React.ReactNode;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      duration: 0.6,
    },
  },
};

const SkillCard: React.FC<Skill> = ({ name, percentage, description, icon }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 space-y-4 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Icon & Name */}
      <div className="flex items-center gap-3">
        <span className="text-3xl text-yellow-400">{icon}</span>
        <h3 className="text-xl font-bold text-white">{name}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>

      {/* Linear Progress Bar */}
      <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      <div className="text-right text-sm text-gray-400">{percentage}%</div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontEndSkills: Skill[] = [
    {
      name: "HTML",
      percentage: 95,
      description: "Building structured, semantic, and accessible web content.",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      percentage: 90,
      description: "Designing responsive and visually appealing web layouts.",
      icon: <FaCss3Alt />,
    },
    {
      name: "TypeScript",
      percentage: 80,
      description: "Writing maintainable, scalable code with type safety.",
      icon: <FaJs />,
    },
    {
      name: "Python",
      percentage: 60,
      description: "Developing backend logic and automation scripts.",
      icon: <FaPython />,
    },
  ];

  const frameworksAndLibraries: Skill[] = [
    {
      name: "Next.js",
      percentage: 75,
      description: "Developing high-performance, SEO-optimized web applications.",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      percentage: 85,
      description: "Efficiently styling responsive, modern UI components.",
      icon: <SiTailwindcss />,
    },
    {
      name: "React",
      percentage: 80,
      description: "Building dynamic and interactive user interfaces.",
      icon: <FaReact />,
    },
  ];

  const tools: Skill[] = [
    {
      name: "Figma",
      percentage: 70,
      description: "Turning design concepts into pixel-perfect web interfaces.",
      icon: <FaFigma />,
    },
    {
      name: "Git",
      percentage: 80,
      description: "Managing version control and collaboration in software development.",
      icon: <FaGitAlt />,
    },
  ];

  // SEO Metadata
  const seoConfig = {
    title: "Skills | Muhammad Hamza Ismail - Web Developer in Pakistan",
    description:
      "Explore the technical skills of Muhammad Hamza Ismail, including expertise in Next.js, React, TypeScript, Tailwind CSS, and more.",
    keywords:
      "web developer skills, front-end developer Pakistan, Next.js skills, React developer, TypeScript, Tailwind CSS, Figma, Git",
    url: "https://muhammadhamzaismail.vercel.app/skills",
    image: "/logo.png",
  };

  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Muhammad Hamza Ismail" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.url} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta
          property="og:image"
          content={`${seoConfig.url}${seoConfig.image}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoConfig.url} />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta
          name="twitter:image"
          content={`${seoConfig.url}${seoConfig.image}`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href={seoConfig.url} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Hamza Ismail",
            "url": seoConfig.url,
            "knowsAbout": [
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "HTML",
              "CSS",
              "Python",
              "Figma",
              "Git",
            ],
          })}
        </script>
      </Head>

      <div className="min-h-screen text-white py-16 px-4 sm:px-6 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-violet-500 bg-clip-text text-transparent">
            My Technical Expertise
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my skills in front-end development, frameworks, and tools, crafted to deliver modern, high-performance web solutions.
          </p>
        </motion.div>

        {/* Skills Sections */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Front-End Development */}
          <section className="mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white mb-8"
            >
              Front-End Development
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {frontEndSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </section>

          {/* Frameworks & Libraries */}
          <section className="mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white mb-8"
            >
              Frameworks & Libraries
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {frameworksAndLibraries.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white mb-8"
            >
              Tools
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {tools.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;