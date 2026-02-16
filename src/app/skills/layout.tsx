import { Metadata } from "next";

const siteUrl = "https://muhammadhamzaismail.vercel.app";

export const metadata: Metadata = {
  title: "Skills - Next.js, React, Node.js & AI Development Expert",
  description:
    "Explore technical skills of Muhammad Hamza Ismail. Expert in Next.js 15, React, TypeScript, Node.js, MongoDB, Python, FastAPI, and AI automation. Hire a skilled full stack developer.",
  keywords: [
    "web developer skills",
    "Next.js developer",
    "React developer skills",
    "Node.js expert",
    "TypeScript developer",
    "MongoDB developer",
    "full stack skills",
    "AI development skills",
    "Python developer",
    "FastAPI developer",
    "frontend developer skills",
    "backend developer skills",
  ],
  openGraph: {
    title: "Technical Skills - Full Stack & AI Development Expertise",
    description:
      "Next.js, React, TypeScript, Node.js, MongoDB, Python, FastAPI, and AI automation skills. Professional web development expertise.",
    url: `${siteUrl}/skills`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Web Development Skills - Muhammad Hamza Ismail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills - Next.js, React, Node.js & AI Expert",
    description:
      "Full stack development skills including Next.js, React, Node.js, Python, and AI automation. Hire expert developer.",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: `${siteUrl}/skills`,
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
