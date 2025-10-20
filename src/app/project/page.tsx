"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  category: string;
  slug: { current: string };
  mainImage?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}


export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch<Project[]>(
          `*[_type == "project"] | order(order asc) {
            _id,
            title,
            category,
            slug,
            mainImage
          }`
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-400">Loading projects...</div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        No projects available yet.
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#0a0e17] to-[#1a1f3a] text-white">
      <div className="">
        {/* Carousel Wrapper */}
        <Carousel opts={{ align: "start" }} className="w-full md:pl-28">
          {/* Header row (still outside of CarouselContent, but inside Carousel context) */}
          <div className="flex items-center justify-between mb-8 px-4 md:px-0">
            <h2 className="text-3xl pb-5 md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-yellow-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            {/* Arrows (now inside Carousel provider but same visual position) */}
            <div className="flex pr-10">
              <CarouselPrevious className="relative w-9 h-9 flex items-center justify-center rounded-full bg-[#1f1b3a] hover:bg-violet-700 border border-violet-800 transition">
                <ChevronLeft className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="relative w-9 h-9 left-0 flex items-center justify-center rounded-full bg-[#1f1b3a] hover:bg-violet-700 border border-violet-800 transition">
                <ChevronRight className="w-5 h-5" />
              </CarouselNext>
            </div>
          </div>

          {/* Carousel Content */}
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project._id}
                className="pl-4 md:basis-1/3 xl:basis-[27%] flex-shrink-0"
              >
                <div className="bg-[#120d25] rounded-xl border border-violet-800/40 hover:border-violet-600/60 hover:shadow-xl hover:shadow-violet-800/30 transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover"
                    />
                  )}

                  {/* Card Content */}
                  <div className="p-5">
                    <span className="text-xs bg-violet-900/40 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-3 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <Link
                      href={`/project/${project.slug.current}`}
                      className="inline-block mt-3 text-sm text-violet-400 hover:text-yellow-300 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
