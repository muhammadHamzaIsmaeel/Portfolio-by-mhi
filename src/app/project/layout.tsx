import { Metadata } from "next";

const siteUrl = "https://muhammadhamzaismail.vercel.app";

export const metadata: Metadata = {
  title: "Projects - Web Development Portfolio & Case Studies",
  description:
    "View portfolio of Muhammad Hamza Ismail. See real-world projects including e-commerce websites, business web apps, AI-powered applications, and custom web solutions. Expert Next.js and React developer.",
  keywords: [
    "web development portfolio",
    "web developer projects",
    "Next.js projects",
    "React portfolio",
    "e-commerce website examples",
    "web application portfolio",
    "AI project examples",
    "full stack projects",
    "website developer portfolio",
    "custom website examples",
  ],
  openGraph: {
    title: "Web Development Projects & Portfolio - Expert Developer Work",
    description:
      "Explore real projects: e-commerce sites, web applications, AI integrations, and custom solutions. See the quality of professional web development.",
    url: `${siteUrl}/project`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Web Development Portfolio - Muhammad Hamza Ismail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Projects & Portfolio",
    description:
      "See real-world projects: e-commerce, web apps, AI applications. Professional web development portfolio.",
    images: [`${siteUrl}/og.png`],
  },
  alternates: {
    canonical: `${siteUrl}/project`,
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
