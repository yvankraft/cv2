"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FaGraduationCap,
  FaCode,
  FaArrowRight,
  FaBolt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
import { BentoBox } from "./ui";
import SeeMoreButton from "./SeeMoreButton";

const education = [
  {
    title: "Studium Elektrotechnik (B.Eng.)",
    place: "FH Südwestfalen, Soest — seit 09/2024",
    detail:
      "Focus on technical mathematics, physical foundations and problem solving. Confident handling of complex technical plans and calculations.",
    active: true,
  },
  {
    title: "Fachabitur — Kälte- und Klimatechnik",
    place: "Technisches Gymnasium Nylon Ndogpassi, Douala (Kamerun) — 06/2021",
    detail:
      "Technical high-school diploma specializing in refrigeration and climate engineering. Core subjects: thermodynamics, technical mechanics and electrical engineering.",
    active: false,
  },
  {
    title: "Praktikant Kältetechnik",
    place: "Afrique Froid et Climatisation, Douala — Sommerferien 2018–2021",
    detail:
      "Installation and maintenance of air-conditioning and refrigeration systems, supporting the assembly of technical components.",
    active: false,
  },
];

const projects = [
  {
    name: "Portfolio",
    url: "https://pfwildis1.vercel.app",
    desc: "Professional portfolio — Next.js, TypeScript, Tailwind CSS.",
  },
  {
    name: "E-Shop",
    url: "https://e-shop-alpha-ashen.vercel.app",
    desc: "Scalable e-commerce platform — state management & API logic.",
  },
  {
    name: "Droners",
    url: "https://droners-tau.vercel.app",
    desc: "Landing page visualizing drone & UAV concepts.",
  },
  {
    name: "Web Magazine",
    url: "https://page-web-fawn-five.vercel.app",
    desc: "Responsive magazine focused on modern UI/UX design.",
  },
];

type Tech = { name: string; category: string; history: string };

const stack: Tech[] = [
  {
    name: "HTML5 & CSS3",
    category: "Frontend",
    history:
      "My entry point into development. Semantic markup, responsive layouts, Flexbox/Grid and animations — the foundation of every project I build.",
  },
  {
    name: "JavaScript / TypeScript",
    category: "Languages",
    history:
      "The core language of my work. Started with vanilla JS for interactive pages, then adopted TypeScript for safer, scalable codebases.",
  },
  {
    name: "React",
    category: "Frontend",
    history:
      "My main UI library. Component architecture, hooks and state management — used across all my web projects including this portfolio.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    history:
      "My go-to framework for production sites: App Router, server components, image optimization and SEO. Powers this CV and my portfolio.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    history:
      "Utility-first styling for fast, consistent design. Used for the entire layout and design system of my recent projects.",
  },
  {
    name: "Node.js",
    category: "Backend",
    history:
      "Backend APIs and tooling: REST endpoints, scripting and server-side logic for full-stack applications.",
  },
  {
    name: "Flutter & Dart",
    category: "Mobile",
    history:
      "Cross-platform mobile development. Built and shipped Android/iOS apps from a single Dart codebase.",
  },
  {
    name: "Firebase",
    category: "Backend",
    history:
      "Auth, Firestore and hosting for rapid prototypes — my default backend-as-a-service for app projects.",
  },
  {
    name: "Three.js",
    category: "3D & Graphics",
    history:
      "Real-time 3D in the browser via react-three-fiber — like the interactive workspace scene further down this page.",
  },
  {
    name: "Blender",
    category: "3D & Graphics",
    history:
      "3D modeling and asset creation. The desk model in the scene above was built and exported from Blender as GLB.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    history:
      "Daily version control: branching, rebasing and collaborative workflows on GitHub.",
  },
  {
    name: "VS Code & Figma",
    category: "Tools",
    history:
      "My everyday environment — VS Code for development, Figma for designing and prototyping interfaces before building them.",
  },
  {
    name: "GSAP",
    category: "Frontend",
    history:
      "Advanced scroll-driven and timeline animations — used for the animated scenes on my portfolio.",
  },
  {
    name: "Python",
    category: "Languages",
    history:
      "Basics for scripting and university coursework — automation and problem-solving exercises.",
  },
  {
    name: "Vercel",
    category: "DevOps",
    history:
      "My default deployment platform — all my Next.js projects ship through Vercel with CI on every push.",
  },
  {
    name: "AWS",
    category: "DevOps",
    history:
      "Cloud fundamentals: deploying and hosting projects, storage and infrastructure basics.",
  },
  {
    name: "Docker",
    category: "DevOps",
    history:
      "Containerization for reproducible dev environments and deployments — consistent builds from machine to machine.",
  },
];

const PREVIEW_COUNT = 5;

function StackAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? stack : stack.slice(0, PREVIEW_COUNT);

  return (
    <div>
      <div className="divide-y divide-black/5">
        {visible.map((tech) => {
        const isOpen = open === tech.name;
        return (
          <div key={tech.name}>
            <button
              onClick={() => setOpen(isOpen ? null : tech.name)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-4 text-left group"
            >
              <div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-0.5">
                  {tech.category}
                </p>
                <p
                  className={`font-bold transition-colors ${
                    isOpen ? "text-black" : "text-gray-700 group-hover:text-black"
                  }`}
                >
                  {tech.name}
                </p>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 shrink-0 ml-4"
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-8 border-l-2 border-black pl-4">
                    {tech.history}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      </div>
      <button
        onClick={() => {
          setShowAll(!showAll);
          setOpen(null);
        }}
        className="w-full mt-6 flex items-center justify-center gap-2 border border-black/15 hover:bg-black hover:text-white rounded-xl py-3 text-[11px] font-black uppercase tracking-widest transition-all"
      >
        {showAll ? "Show less" : `Show all (${stack.length})`}
        <motion.span animate={{ rotate: showAll ? 180 : 0 }}>
          <FaChevronDown />
        </motion.span>
      </button>
    </div>
  );
}

export default function Sections() {
  return (
    <>
      {/* --- BENTO GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 grid md:grid-cols-12 gap-6">

        <BentoBox className="md:col-span-12" delay={0.15}>
          <div
            id="work"
            className="scroll-mt-28 flex flex-col md:flex-row md:items-center justify-between gap-8"
          >
            <div className="flex-1">
              <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.3em] mb-2">
                Selected Work
              </p>
              <h2 className="text-3xl font-black italic uppercase mb-6">
                Projects &amp; Experiments
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                {projects.map((p) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-black/10 hover:border-black rounded-2xl p-4 transition-all hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                    <p className="font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      {p.name}
                      <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <SeeMoreButton
                href="https://pfwildis1.vercel.app/"
                text="View portfolio"
              />
              <a
                href="https://github.com/yvankraft"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 flex items-center gap-2 justify-center border border-black/15 hover:bg-black hover:text-white rounded-2xl text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </BentoBox>
      </section>

      {/* --- CONTACT --- */}
      <section
        id="contact"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 scroll-mt-28"
      >
        <BentoBox className="text-center py-16 px-8 bg-gray-50">
          <p className="text-gray-400 font-black uppercase text-[10px] tracking-[0.3em] mb-4">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight mb-6">
            Let&apos;s build something.
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto font-light mb-10">
            Open for internships, freelance projects and collaborations. Feel
            free to reach out — I usually reply within a day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:yvanngone53@gmail.com"
              className="group bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            >
              <FaEnvelope /> yvanngone53@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/yvan-ngone-271b2b30b/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/15 hover:bg-black hover:text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </BentoBox>
      </section>
    </>
  );
}
