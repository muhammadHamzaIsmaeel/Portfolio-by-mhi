'use client';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  description: string;
}

const SkillCard: React.FC<Skill> = ({ name, percentage, description }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-6 space-y-4 transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50 hover:border-yellow-400"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.3 }}
    >
      {/* Circular Progress Bar */}
      <div className="relative flex justify-center items-center">
        <svg className="w-32 h-32" viewBox="0 0 120 120">
          <circle
            className="text-gray-800"
            stroke="currentColor"
            strokeWidth="12"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <motion.circle
            stroke="url(#progressGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, delay: 0.3 }}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-center text-white">{name}</h3>
      <p className="text-sm text-center text-gray-300">{description}</p>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontEndSkills: Skill[] = [
    { name: 'HTML', percentage: 95, description: 'Building structured, semantic, and accessible web content.' },
    { name: 'CSS', percentage: 90, description: 'Designing responsive and visually appealing web layouts.' },
    { name: 'TypeScript', percentage: 80, description: 'Writing maintainable, scalable code with type safety.' },
    { name: 'Python', percentage: 40, description: 'Writing maintainable, scalable code with type safety.' }
  ];

  const frameworksAndLibraries: Skill[] = [
    { name: 'Next.js', percentage: 75, description: 'Developing high-performance, SEO-optimized web applications.' },
    { name: 'Tailwind CSS', percentage: 85, description: 'Efficiently styling responsive, modern UI components.' },
  ];

  const tools: Skill[] = [
    { name: 'Figma', percentage: 70, description: 'Turning design concepts into pixel-perfect web interfaces.' },
    { name: 'Git', percentage: 80, description: 'Managing version control and collaboration in software development.' },
  ];

  return (
    <div id="skill" className="min-h-screen py-10 px-10 md:px-4 sm:px-8  text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center text-white mb-12"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-violet-500 text-transparent bg-clip-text mb-8">
          Front-End Development
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {frontEndSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-violet-500 text-transparent bg-clip-text mb-8">
          Frame Works And Libraries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {frameworksAndLibraries.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 to-violet-500 text-transparent bg-clip-text mb-8">
          Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
