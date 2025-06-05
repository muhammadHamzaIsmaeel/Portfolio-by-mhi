// src/app/services/[slug]/page.tsx
"use client"; // Add this directive since we'll use client-side hooks

import ServiceProcess from "@/components/ServiceProcess";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight, FaDollarSign } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import type { PopulatedService, RelatedService } from "@/app/types/service";

const getService = async (
  slug: string
): Promise<
  (PopulatedService & { relatedServices: RelatedService[] }) | null
> => {
  try {
    const service = await client.fetch<
      (PopulatedService & { relatedServices: RelatedService[] }) | null
    >(
      `*[_type == "service" && slug.current == $slug][0] {
        ...,
        "technologies": technologies[]->{
          _id,
          name,
          "slug": slug.current,
          "logo": logo.asset->{url},
          category
        },
        "relatedServices": *[_type == "service" && slug.current != $slug][0...3] {
          _id,
          title,
          "slug": slug.current,
          description,
          image
        }
      }`,
      { slug }
    );
    return service;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  const [service, setService] = useState<
    (PopulatedService & { relatedServices: RelatedService[] }) | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getService(slug);
        if (!data) {
          setError("Service not found");
          return;
        }
        setService(data);
      } catch (err) {
        console.error("Failed to fetch service:", err);
        setError("Failed to load service data");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  const getPriceRangeLabel = () => {
    if (!service) return "Loading...";

    switch (service.priceRange) {
      case "budget":
        return (
          <span className="flex items-center">
            <FaDollarSign className="text-green-500" />
            <span className="ml-1">Budget Friendly</span>
          </span>
        );
      case "midrange":
        return (
          <span className="flex items-center">
            <FaDollarSign className="text-green-500" />
            <FaDollarSign className="text-green-500" />
            <span className="ml-1">Mid-Range</span>
          </span>
        );
      case "premium":
        return (
          <span className="flex items-center">
            <FaDollarSign className="text-green-500" />
            <FaDollarSign className="text-green-500" />
            <FaDollarSign className="text-green-500" />
            <span className="ml-1">Premium</span>
          </span>
        );
      default:
        return "Custom Quote";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading service...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{error}</h1>
          <p className="text-gray-600 mb-6">
            There was an issue loading this service.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Browse All Services
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you&apos;re looking for doesn&apos;t exist or may have been moved.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Browse All Services
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${service.title} | Services`}</title>
        <meta name="description" content={service.description} />
      </Head>
      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Modern Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"></div>
          {service.image && (
            <Image
              src={urlFor(service.image).url()}
              alt={service.image.alt || service.title}
              width={1920}
              height={1080}
              className="w-full h-[500px] object-cover"
              priority
            />
          )}
          <div className="container mx-auto px-4 relative z-20 py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/home#contactus"
                  className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center"
                >
                  Get Started
                  <FaArrowRight className="ml-2" />
                </Link>
                <a href="/home#projects">
                  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                    View Portfolio
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Content Section */}
            <div className="lg:w-2/3">
              {/* Service Process */}
              <ServiceProcess />

              {/* Content with modern typography */}
              <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-purple-600 hover:prose-a:text-purple-800 prose-ul:list-disc prose-li:marker:text-purple-500">
                <PortableText value={service.content} />
              </div>

              {/* Features Section */}
              {service.features && service.features.length > 0 && (
                <div className="mt-16 bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    What&apos;s Included
                  </h2>
                  <ul className="grid md:grid-cols-2 gap-6">
                    {service.features.map(
                      (
                        feature,
                        index // Already correct, just showing for completeness
                      ) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-green-500 text-xl mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* Testimonials */}
              <ServiceTestimonials serviceId={service._id} />
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Pricing Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                  <h3 className="text-xl font-bold">Service Package</h3>
                  <p className="opacity-90 mt-1">Starting from</p>
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-gray-800 mb-4">
                    {getPriceRangeLabel()}
                  </div>
                  <Link
                    href="/home#contactus"
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>

              {/* Technologies Card */}
              {service.technologies && service.technologies.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Technologies We Use
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies?.map((tech) => (
                      <Link
                        key={tech._id}
                        href={`/technologies/${tech.slug}`}
                        className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-3 transition-colors"
                      >
                        {tech.logo?.asset?.url ? (
                          <Image
                            src={tech.logo.asset.url}
                            alt={tech.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 mr-3 object-contain"
                          />
                        ) : (
                          <div className="w-8 h-8 mr-3 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-500">
                              {tech.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <span className="font-medium text-gray-700">
                          {tech.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-gray-700">
                      How long does this service take?
                    </h4>
                    <p className="text-gray-500 mt-1 text-sm">
                      Typically 2-4 weeks depending on project complexity.
                    </p>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-gray-700">
                      Do you provide ongoing support?
                    </h4>
                    <p className="text-gray-500 mt-1 text-sm">
                      Yes, we offer various support packages after delivery.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">
                      Can I see examples of similar work?
                    </h4>
                    <p className="text-gray-500 mt-1 text-sm">
                      Absolutely! Check our portfolio or request specific
                      examples.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Explore More Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We offer a range of specialized services to meet your digital
                  needs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.relatedServices.map(
                  (
                    related // Remove ": any"
                  ) => (
                    <div
                      key={related.slug.current}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {related.image && (
                        <div className="h-48 relative">
                          <Image
                            src={urlFor(related.image).url()}
                            alt={related.image.alt || related.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">
                          {related.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {related.description}
                        </p>
                        <Link
                          href={`/services/${related.slug.current}`}
                          className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
                        >
                          Learn more
                          <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
