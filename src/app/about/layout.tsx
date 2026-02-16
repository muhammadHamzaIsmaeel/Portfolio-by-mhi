import { Metadata } from "next";

const siteUrl = "https://muhammadhamzaismail.vercel.app";

export const metadata: Metadata = {
  title: "About - Expert Full Stack Web Developer & AI Specialist",
  description:
    "Learn about Muhammad Hamza Ismail, a professional full stack web developer in Pakistan. Expert in Next.js, React, Node.js, and AI development. Building scalable web applications and AI automation solutions.",
  keywords: [
    "about web developer",
    "full stack developer Pakistan",
    "Next.js expert",
    "React developer Karachi",
    "AI developer Pakistan",
    "Muhammad Hamza Ismail",
    "web development expert",
    "JavaScript developer",
    "TypeScript specialist",
  ],
  openGraph: {
    title: "About Muhammad Hamza Ismail - Full Stack Developer & AI Expert",
    description:
      "Professional full stack web developer specializing in Next.js, React, Node.js, and AI automation. Building modern web applications in Pakistan.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: [
      {
        url: `${siteUrl}/hamza.png`,
        width: 800,
        height: 800,
        alt: "Muhammad Hamza Ismail - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Expert Full Stack Developer & AI Specialist",
    description:
      "Meet Muhammad Hamza Ismail, a professional web developer in Pakistan. Expert in Next.js, React, and AI development.",
    images: [`${siteUrl}/hamza.png`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
