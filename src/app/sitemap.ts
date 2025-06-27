import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { servicesQuery } from "@/sanity/queries";
import { Service } from "@/app/types/service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch services from Sanity
  const services: Service[] = await client.fetch(servicesQuery);

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://muhammadhamzaismail.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://muhammadhamzaismail.vercel.app/home",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://muhammadhamzaismail.vercel.app/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic service pages
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `https://muhammadhamzaismail.vercel.app/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine static and dynamic routes
  return [...staticRoutes, ...serviceRoutes];
}