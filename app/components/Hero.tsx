"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiX,
  FiMessageSquare,
  FiCopy,
  FiCheck,
  FiDownload,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const timeline = [
  {
    time: "seit 09/2024",
    title: "Studium Elektrotechnik (B.Eng.)",
    place: "FH Südwestfalen, Soest",
    detail:
      "Schwerpunkt auf technischer Mathematik, physikalischen Grundlagen und Problemlösung. Sicherer Umgang mit komplexen technischen Plänen und Berechnungen.",
  },
  {
    time: "06/2021",
    title: "Fachabitur — Kälte- und Klimatechnik",
    place: "Technisches Gymnasium Nylon Ndogpassi, Douala (Kamerun)",
    detail:
      "Technischer Schulabschluss. Schwerpunkte: Thermodynamik, technische Mechanik und Elektrotechnik.",
  },
  {
    time: "Sommerferien 2018–2021",
    title: "Praktikant im Bereich Kältetechnik",
    place: "Afrique Froid et Climatisation, Douala",
    detail:
      "Installation und Wartung von Klimaanlagen und Kältesystemen, Unterstützung bei der Montage technischer Komponenten.",
  },
];

const skills = [
  {
    label: "Programmierung",
    items: ["JavaScript / TypeScript", "Dart (Flutter)", "HTML5 / CSS3", "React / Next.js", "Python (Basics)"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Vercel & Docker", "VS Code & Figma", "Three.js & GSAP", "Blender"],
  },
  {
    label: "Sprachen",
    items: ["Französisch (Muttersprache)", "Deutsch (C1)", "Englisch (gute Kenntnisse)"],
  },
];

function CopyField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-sm font-bold px-5 py-3 rounded-2xl transition-colors active:scale-95"
    >
      {copied ? <FiCheck className="text-green-600" /> : <FiCopy />}
      {value}
    </button>
  );
}

function Modal({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl overflow-y-auto shadow-2xl z-10 border border-zinc-200 p-8 md:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition"
        >
          <FiX size={18} />
        </button>
        {children}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <main
      id="top"
      className="relative z-10 max-w-6xl mx-auto min-h-screen flex items-center px-6 md:px-12 py-24 font-mono"
    >
      <div className="md:grid md:grid-cols-[2fr_1.5fr_1.5fr] gap-8 space-y-8 md:space-y-0 items-center w-full">
        {/* 1. Nom */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold text-gray-800 leading-none"
          >
            Yvan <br /> Wildis <br />
            <span className="text-gray-400 font-bold">
              Ngone <br /> Tchinda
            </span>
          </motion.h1>
        </div>

        {/* 2. Photo — reveal card → modal profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onClick={() => setIsProfileOpen(true)}
          className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 group cursor-pointer shadow-lg border border-zinc-200/50"
        >
          <Image
            src="/picture.jpg"
            alt="Yvan Wildis Ngone Tchinda"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent translate-y-[75%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] p-6 flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight leading-none">
                Profil anzeigen
              </h3>
              <div className="bg-white p-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 translate-x-4 group-hover:translate-x-0">
                <FiArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Rôle — card → modal timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onClick={() => setIsTimelineOpen(true)}
          className="relative flex flex-col justify-center bg-gray-200 gap-4 p-8 h-full rounded-3xl shadow-sm cursor-pointer group overflow-hidden transition-colors duration-300 hover:bg-gray-300"
        >
          <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
            Full-stack Developer &amp; Elektrotechnik-Student
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Leidenschaftlicher Entwickler mit fundierten Kenntnissen in der
            Webentwicklung und Flutter. Technisches Systemverständnis trifft
            auf praktische Projekterfahrung.
          </p>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent translate-y-[85%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] p-6 flex flex-col justify-end">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Lebenslauf ansehen
              </span>
              <div className="bg-white p-2 rounded-full text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <FiArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL 1 : Profil */}
      <AnimatePresence>
        {isProfileOpen && (
          <Modal onClose={() => setIsProfileOpen(false)}>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Über mich
              </span>
              <h2 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight mt-1">
                Yvan Wildis Ngone Tchinda
              </h2>
              <p className="text-sm font-semibold text-zinc-500 mt-1">
                Angehender Fachinformatiker | Elektrotechnik-Student
              </p>
            </div>
            <div className="h-[1px] w-full bg-zinc-200 my-6" />
            <div className="space-y-4 text-zinc-600 text-sm leading-relaxed">
              <p>
                Leidenschaftlicher Full-Stack-Entwickler und
                Elektrotechnik-Student mit fundierten Kenntnissen in der
                Webentwicklung und Flutter. Ich kombiniere technisches
                Systemverständnis mit praktischer Erfahrung in der Umsetzung
                und Veröffentlichung eigenständiger Projekte (Vercel, GitHub).
              </p>
            </div>
            <div className="h-[1px] w-full bg-zinc-200 my-6" />
            <div className="grid sm:grid-cols-3 gap-6">
              {skills.map((s) => (
                <div key={s.label}>
                  <h3 className="font-bold text-zinc-900 uppercase tracking-tight text-sm">
                    {s.label}
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-600">
                    {s.items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="h-[1px] w-full bg-zinc-200 my-6" />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <FiMapPin /> Hamm, Deutschland
              </span>
              <span className="flex items-center gap-1">
                <FiMail /> yvanngone53@gmail.com
              </span>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* MODAL 2 : Timeline Lebenslauf */}
      <AnimatePresence>
        {isTimelineOpen && (
          <Modal onClose={() => setIsTimelineOpen(false)}>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Lebenslauf
              </span>
              <h2 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight mt-1">
                Ausbildung &amp; Erfahrung
              </h2>
            </div>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={t.title} className="relative pl-8 pb-8 last:pb-0">
                  {i < timeline.length - 1 && (
                    <span className="absolute left-[7px] top-6 bottom-0 w-px bg-zinc-200" />
                  )}
                  <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-900" />
                  <time className="font-mono italic text-xs text-zinc-400">
                    {t.time}
                  </time>
                  <h3 className="text-base font-bold text-zinc-900 uppercase tracking-tight mt-0.5">
                    {t.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500">
                    {t.place}
                  </p>
                  <p className="text-xs mt-2 leading-relaxed text-zinc-600">
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </Modal>
        )}
      </AnimatePresence>

      
    </main>
  );
}
