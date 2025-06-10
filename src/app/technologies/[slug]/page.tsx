// src/app/technologies/[slug]/page.tsx
"use client"; // Clave: Convertimos este en un Client Component

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { FaArrowRight, FaCode } from "react-icons/fa";
import { notFound, useParams } from 'next/navigation';
import { Technology, RelatedProject } from "@/app/types/technology";
import { Service } from "@/app/types/service";
import { useEffect, useState } from "react"; // Importamos los hooks necesarios

// Define la estructura de los datos que vamos a buscar
interface FetchedTechnology extends Technology {
  services?: Array<Pick<Service, 'title' | 'description'> & {
    _id: string;
    slug: { current: string };
    image?: {
      asset: { _ref: string };
      alt?: string;
    };
  }>;
  projects?: RelatedProject[];
}

// La función de fetching se mantiene igual, pero la llamaremos desde un hook
async function getTechnology(slug: string): Promise<FetchedTechnology | null> {
  try {
    const technology = await client.fetch<FetchedTechnology | null>(
      `*[_type == "technology" && slug.current == $slug][0] {
        _id, name, "slug": slug.current, logo {..., asset->}, description,
        category, aboutContent, whyWeUse, experienceLevel, projectsCompleted,
        preferredFor,
        "services": *[_type == "service" && references(^._id)] | order(title asc) {
          _id, title, "slug": slug.current, description, image {..., asset->}
        },
        "projects": *[_type == "project" && references(^._id)] | order(_createdAt desc)[0...3] {
          _id, title, "slug": slug.current, description, mainImage {..., asset->}
        }
      }`,
      { slug }
    );
    return technology;
  } catch (error) {
    console.error("Error fetching technology:", error);
    return null;
  }
}

// Define PortableText components if needed
interface PortableTextComponents {
  marks?: {
    link?: (props: {
      value?: { href?: string };
      children?: React.ReactNode;
    }) => React.ReactNode;
  };
}

// El componente ya no es 'async'. Es un componente de React estándar.
export default function TechnologyPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Estados para manejar los datos, la carga y los errores
  const [technology, setTechnology] = useState<FetchedTechnology | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Usamos useEffect para buscar los datos cuando el componente se monta o el slug cambia
  useEffect(() => {
    if (!slug) return;

    const fetchTechnologyData = async () => {
      setLoading(true);
      try {
        const data = await getTechnology(slug);
        if (data) {
          setTechnology(data);
        } else {
          setError("Technology not found.");
        }
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load technology data.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologyData();
  }, [slug]);

  // Pantalla de carga
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading Technology...</p>
        </div>
      </div>
    );
  }

  // Pantalla de error
  if (error) {
    return (
       <div className="min-h-screen bg-white flex items-center justify-center text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  // Si no hay tecnología, mostramos la página 404
  if (!technology) {
    return notFound();
  }

  // Las funciones de ayuda ahora usan la variable de estado 'technology'
  const getCategoryIcon = () => {
    switch (technology.category) {
      case 'frontend': return <FaCode className="text-blue-500" />;
      // ... (el resto del switch es igual)
      default: return <FaCode className="text-gray-500" />;
    }
  };

  const getExperienceLabel = () => {
    switch (technology.experienceLevel) {
      case 'beginner': return 'Beginner';
      // ... (el resto del switch es igual)
      default: return 'N/A';
    }
  };

  const ptComponents: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
        return (
          <a href={value?.href} rel={rel} className="text-purple-600 hover:underline">
            {children}
          </a>
        );
      },
    }
  };

  // El JSX se mantiene casi idéntico, ya que ahora lee desde la variable 'technology'
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {technology.logo?.asset && (
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl shadow-md p-4 flex items-center justify-center flex-shrink-0">
                <Image
                  src={urlFor(technology.logo).width(160).height(160).fit('clip').url()}
                  alt={technology.logo.alt || technology.name}
                  width={160}
                  height={160}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}
            <div>
              {technology.category && (
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                  {getCategoryIcon()}
                  <span className="text-sm font-medium text-gray-700 capitalize">
                    {technology.category}
                  </span>
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {technology.name}
              </h1>
              {technology.description && (
                <p className="text-xl text-gray-600 max-w-3xl">
                  {technology.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2">
            {technology.aboutContent && technology.aboutContent.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  About {technology.name}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600 prose-li:marker:text-purple-500 prose-a:text-purple-600 hover:prose-a:text-purple-800">
                  <PortableText 
                    value={technology.aboutContent} 
                    components={ptComponents} 
                  />
                </div>
              </div>
            )}

            {technology.whyWeUse && technology.whyWeUse.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Why We Use {technology.name}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
                  {technology.whyWeUse.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            )}

            {technology.services && technology.services.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Services Using {technology.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {technology.services.map((service) => (
                    <Link
                      key={service.slug?.current ?? service._id}
                      href={`/services/${service.slug}`}
                      className="group bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-all duration-200 hover:shadow-md block"
                    >
                      {service.image?.asset && (
                        <div className="h-40 relative mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={urlFor(service.image).width(400).height(200).fit('crop').url()}
                            alt={service.image.alt || service.title || 'Service image'}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 mb-2 transition-colors">
                        {service.title}
                      </h4>
                      {service.description && (
                        <p className="text-gray-600 line-clamp-2 text-sm mb-4">
                          {service.description}
                        </p>
                      )}
                      <div className="mt-4 inline-flex items-center text-purple-600 font-medium">
                        View service
                        <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Sidebar) */}
          <aside className="lg:sticky lg:top-28 h-fit space-y-8">
            {technology.projects && technology.projects.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Featured Projects
                </h3>
                <div className="space-y-4">
                  {technology.projects.map((project) => (
                    <Link
                      key={project.slug?.current ?? project._id}
                      href={`/projects/${project.slug?.current}`}
                      className="flex items-center gap-4 group p-2 -m-2 rounded-lg hover:bg-gray-200/50 transition-colors"
                    >
                      {project.mainImage?.asset && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                          <Image
                            src={urlFor(project.mainImage).width(64).height(64).fit('crop').url()}
                            alt={project.title || 'Project image'}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </h4>
                        {project.description && (
                          <p className="text-sm text-gray-500 line-clamp-1">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Technology Stats
              </h3>
              <div className="space-y-4">
                {technology.experienceLevel && (
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Experience Level</p>
                    <p className="font-semibold text-lg text-gray-800">{getExperienceLabel()}</p>
                  </div>
                )}
                {typeof technology.projectsCompleted === 'number' && technology.projectsCompleted >= 0 && (
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Projects Completed</p>
                    <p className="font-semibold text-lg text-gray-800">{technology.projectsCompleted}+</p>
                  </div>
                )}
                {technology.preferredFor && technology.preferredFor.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-2">Preferred For</p>
                    <div className="flex flex-wrap gap-2">
                      {technology.preferredFor.map((useCase, index) => (
                        <span key={index} className="inline-block bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full capitalize">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-3">
                Need {technology.name} Experts?
              </h3>
              <p className="mb-6 opacity-90 text-sm">
                Our team has deep experience with {technology.name}. Let&apos;s discuss how we can help with your project.
              </p>
              <Link
                href="/#contactus" // Or your specific contact page/section ID
                className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}