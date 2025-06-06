// src/app/project/[slug]/page.tsx
"use client"; // Add this directive since we'll use client-side hooks

import { FetchedProject } from "@/app/types/project";
import { client } from "@/sanity/lib/client";
import { notFound, useParams } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";


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

  useEffect(() => {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          <p className="mt-4 text-violet-200">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white flex items-center justify-center">
        <div className="text-center text-red-400">{error}</div>
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
            className="text-violet-400 hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white py-12 md:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Link
          href="/home"
          className="inline-flex items-center gap-2 mb-8 text-violet-300 hover:text-white transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Showcase */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden border border-violet-900/50">
                <video
                  src={project.desktopVideo.asset.url}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full"
                />
              </div>
              <div className="w-1/2 mx-auto rounded-2xl overflow-hidden border-4 border-violet-900/50">
                <video
                  src={project.mobileVideo.asset.url}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full"
                />
              </div>
            </div>

            {/* Project Content */}
            {project.body && (
              <div className="prose prose-invert max-w-none">
                <PortableText value={project.body} components={ptComponents} />
              </div>
            )}

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={screenshot._key}
                      className="rounded-lg overflow-hidden border border-violet-900/50"
                    >
                      <Image
                        src={urlFor(screenshot).url()}
                        alt={
                          screenshot.alt ||
                          `Screenshot ${index + 1} of ${project.title}`
                        }
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Project Meta */}
          <div className="space-y-8">
            {/* Project Links */}
            <div className="p-6 bg-[#10002b]/80 backdrop-blur-md rounded-xl border border-violet-900/30">
              <h2 className="text-xl font-semibold mb-4">Project Links</h2>
              <div className="space-y-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-violet-900/50 hover:bg-violet-800/70 rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-violet-900/50 hover:bg-violet-800/70 rounded-lg transition-colors"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div className="p-6 bg-[#10002b]/80 backdrop-blur-md rounded-xl border border-violet-900/30">
              <h2 className="text-xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-violet-900/50 text-violet-100 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="p-6 bg-[#10002b]/80 backdrop-blur-md rounded-xl border border-violet-900/30">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="p-6 bg-[#10002b]/80 backdrop-blur-md rounded-xl border border-violet-900/30">
                <h2 className="text-xl font-semibold mb-4">
                  Challenges & Solutions
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
