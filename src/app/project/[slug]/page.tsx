"use client";

import { FetchedProject } from "@/app/types/project";
import { client } from "@/sanity/lib/client";
import { notFound, useParams } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PortableTextComponents {
  marks?: {
    link?: (props: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => React.ReactNode;
  };
}

const getProjectData = async (slug: string) => {
  try {
    const data = await client.fetch<FetchedProject>(
      `*[_type == "project" && slug.current == $slug][0] {
        _id,
        title,
        description,
        body,
        mobileVideo {
          asset->{
            _id,
            url
          }
        },
        desktopVideo {
          asset->{
            _id,
            url
          }
        },
        link,
        githubLink,
        technologies,
        features,
        challenges,
        screenshots
      }`,
      { slug }
    );
    return data || null;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const [project, setProject] = useState<FetchedProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchProject = async () => {
      try {
        const data = await getProjectData(slug);
        if (!data) {
          setError("Project not found");
          return;
        }
        setProject(data);
      } catch (err) {
        console.error("Failed to fetch project:", err);
        setError("Failed to load project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"></div>
          <p className="mt-4 text-neutral-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center text-neutral-400">{error}</div>
      </div>
    );
  }

  if (!project) {
    return notFound();
  }

  const ptComponents: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        const rel = !value?.href?.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value?.href}
            rel={rel}
            className="text-white underline hover:text-neutral-300 transition-colors"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-hidden">
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
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/project"
            className="inline-flex items-center gap-2 mb-12 text-neutral-400 hover:text-white transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-light">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-light tracking-widest uppercase mb-6 inline-block">
            Project Details
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tighter mb-6">
            {project.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-neutral-500">
              {project.title.split(" ").slice(-1)}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl font-light leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {project.desktopVideo?.asset?.url && (
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <video
                    src={project.desktopVideo.asset.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full"
                  />
                </div>
              )}
              {project.mobileVideo?.asset?.url && (
                <div className="w-1/2 mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <video
                    src={project.mobileVideo.asset.url}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full"
                  />
                </div>
              )}
            </motion.div>

            {/* Project Content */}
            {project.body && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="prose prose-invert prose-lg max-w-none prose-p:text-neutral-400 prose-p:font-light prose-headings:tracking-tight prose-a:text-white"
              >
                <PortableText value={project.body} components={ptComponents} />
              </motion.div>
            )}

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-8 tracking-tighter">
                  SCREEN<span className="text-neutral-500">SHOTS</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={screenshot._key}
                      className="rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all group"
                    >
                      <Image
                        src={urlFor(screenshot).url()}
                        alt={
                          screenshot.alt ||
                          `Screenshot ${index + 1} of ${project.title}`
                        }
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Project Meta */}
          <div className="space-y-6">
            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h2 className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
                Project Links
              </h2>
              <div className="space-y-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white text-black font-medium rounded-full hover:scale-105 active:scale-95 transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </motion.div>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h2 className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h2 className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-neutral-300 font-light"
                    >
                      <span className="text-white mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h2 className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-4">
                  Challenges & Solutions
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-neutral-300 font-light"
                    >
                      <span className="text-white mt-1">→</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Like what you see?
              </h3>
              <p className="text-neutral-400 font-light text-sm mb-4">
                Let&apos;s discuss how I can help with your next project.
              </p>
              <Link
                href="/#contactus"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
