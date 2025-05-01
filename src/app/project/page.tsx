"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Project } from "../types/project";


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};


async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      "mobileVideo": mobileVideo.asset->url,
      "desktopVideo": desktopVideo.asset->url,
      link,
      technologies
    }`;
  const data = await client.fetch(query);
  return data;
}

export default function ProjectSlider() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleNext = () => {
    if (projects.length === 0) return;
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    if (projects.length === 0) return;
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    const playVideo = (videoRef: React.RefObject<HTMLVideoElement>) => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((e) => console.error("Autoplay prevented:", e));
      }
    };

    playVideo(mobileVideoRef);
    playVideo(desktopVideoRef);
  }, [currentIndex, projects]);

  if (isLoading) {
    return (
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white overflow-hidden min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-violet-200">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white overflow-hidden min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <p className="text-violet-200">
            No projects found. Please add some projects in Sanity Studio.
          </p>
        </div>
      </section>
    );
  }

  const { title, description, mobileVideo, desktopVideo, technologies } =
    projects[currentIndex];

  return (
    <section
      id="project"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-violet-600/10 to-yellow-500/10"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0.5 + Math.random(),
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Device Frames */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-2xl"
          >
            <AnimatePresence custom={direction}>
              <motion.div
                key={`desktop-${currentIndex}`}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 100 : -100,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    transition: { type: "spring", damping: 20 },
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -100 : 100,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="relative z-10 shadow-2xl mr-4 md:mr-0 rounded-xl overflow-hidden"
              >
                {/* Desktop Frame */}
                <div className="bg-[#10002b] h-10 flex items-center px-4 rounded-t-xl border-b border-violet-900/50">
                  <div className="flex space-x-2 mr-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="h-1.5 flex-1 bg-violet-900/30 rounded-full"></div>
                </div>
                <video
                  ref={desktopVideoRef}
                  src={desktopVideo}
                  muted
                  loop
                  autoPlay
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence custom={direction}>
              <motion.div
                key={`mobile-${currentIndex}`}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 80 : -80,
                    y: 20,
                    opacity: 0,
                  }),
                  center: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring", damping: 20, delay: 0.1 },
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -80 : 80,
                    y: 20,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="absolute -bottom-10 -right-6 z-20 shadow-xl w-[80px] h-[170px] md:w-[130px] md:h-[260px] rounded-lg mr-6 mb-5 md:mr-0 md:mb-0 md:rounded-[1.5rem] overflow-hidden border-4 border-[#10002b]"
              >
                {/* Mobile Frame */}
                <div className="bg-[#10002b] h-4 md:h-8 flex items-center justify-center md:rounded-t-[1.2rem] border-b border-violet-900/50">
                  <div className="w-1/3 h-0.5 md:h-1.5 bg-violet-700 rounded-full"></div>
                </div>
                <video
                  ref={mobileVideoRef}
                  src={mobileVideo}
                  muted
                  loop
                  autoPlay
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 md:bottom-3 left-1/2 transform -translate-x-1/2 w-1/4 h-0.5 md:h-1 bg-violet-700 rounded-full"></div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full max-w-md"
          >
            <div className="p-8 bg-[#10002b]/80 backdrop-blur-md rounded-xl border border-violet-900/30 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeIn}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
                    {title}
                  </h3>
                  <p className="text-violet-100 leading-relaxed mb-6">
                    {description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-violet-300/80 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-3 py-1.5 bg-violet-900/50 text-violet-100 rounded-lg text-xs font-medium border border-violet-800/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Link
                      href={`/project/${projects[currentIndex].slug}`}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-yellow-500 hover:from-violet-700 hover:to-yellow-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
                    >
                      More Detail
                      <FaExternalLinkAlt className="text-sm" />
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={handlePrevious}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-900/50 hover:bg-violet-800/70 text-violet-200 hover:text-white transition-all border border-violet-800/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous Project"
              >
                <IoIosArrowBack className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center mx-4">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`mx-1.5 w-2 h-2 rounded-full transition-all ${currentIndex === idx ? "bg-gradient-to-r from-violet-400 to-yellow-300 w-3 h-3" : "bg-violet-800/50"}`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-900/50 hover:bg-violet-800/70 text-violet-200 hover:text-white transition-all border border-violet-800/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next Project"
              >
                <IoIosArrowForward className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
