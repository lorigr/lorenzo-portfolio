import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lorenzograssi.com";

export const metadata: Metadata = {
  title: "Lorenzo Grassi Portfolio",
  description:
    "Lorenzo Grassi is a software developer building full-stack products, from backend architecture to polished frontend experiences.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lorenzo Grassi",
    url: siteUrl,
    jobTitle: "Software Developer",
    sameAs: [
      "https://github.com/lorigr",
      "https://www.linkedin.com/in/lorenzo-grassi-4b6683165/",
    ],
    email: "mailto:9lorenzograssi9@gmail.com",
    knowsAbout: [
      "Software Development",
      "Full-Stack Development",
      "TypeScript",
      "React",
      "Next.js",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lorenzo Grassi Portfolio",
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Lorenzo Grassi",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main className="bg-black min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
