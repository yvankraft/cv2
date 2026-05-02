"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaCode,
  FaBolt,
  FaDownload,
  FaGraduationCap,
} from "react-icons/fa";
import Link from "next/link";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
  ContactShadows,
} from "@react-three/drei";

// --- COMPOSANTS UTILITAIRES ---

const BentoBox = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 hover:border-cyan-400/30 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

function Bureau({
  url,
  position,
}: {
  url: string;
  position: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, meshRef);

  useEffect(() => {
    if (animations && animations.length > 0 && actions) {
      const animName = animations[0].name;
      actions[animName]?.play();
    }
  }, [actions, animations]);

  return (
    <primitive ref={meshRef} object={scene} position={position} scale={0.06} />
  );
}

// --- COMPOSANT PRINCIPAL ---

const MinimalistPortfolio = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Yvan Wildis Ngone Tchinda Lebenslauf.pdf";
    link.download = "Yvan_Wildis_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Grille d'arrière-plan fixe */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff11 1px, transparent 1px), linear-gradient(90deg, #ffffff11 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 max-w-7xl mx-auto min-h-screen grid md:grid-cols-12 gap-8 items-center px-6 md:px-12">
        <div className="md:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter uppercase">
              Yvan <br /> <span className="text-cyan-400 italic">Wildis.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-xl font-light leading-relaxed">
              <span className="text-white font-medium italic">
                Full-stack Developer
              </span>{" "}
              & Engineering Student. Bridging technical logic with high-end
              digital experiences.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link href="https://pfwildis1.vercel.app/">
              <button className="group bg-cyan-400 hover:bg-cyan-500 text-black px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 transition-all shadow-[0_20px_40px_rgba(34,211,238,0.2)]">
                Projects{" "}
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <button
              onClick={handleDownload}
              className="border border-white/10 hover:bg-white/5 text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              <FaDownload /> CV
            </button>
          </div>
        </div>

        <div className="md:col-span-5 relative flex justify-center items-center py-12 md:py-0">
          <div className="absolute w-[150%] h-[150%] bg-cyan-500/5 blur-[120px] rounded-full"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-[4rem] border border-white/10"
          >
            <img
              src="/picture.jpg"
              alt="Yvan Wildis"
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-3xl">
              <div className="flex justify-between items-center text-sm">
                <div>
                  <p className="text-cyan-400 font-black uppercase tracking-widest text-[10px]">
                    Location
                  </p>
                  <p className="font-bold">Hamm, Germany</p>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-black uppercase tracking-widest text-[10px]">
                    Language
                  </p>
                  <p className="font-bold">DE / EN / FR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* --- CONTENT GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 grid md:grid-cols-12 gap-6">
        <BentoBox className="md:col-span-8">
          <div className="flex items-center gap-4 mb-8 text-cyan-400">
            <FaGraduationCap className="text-3xl" />
            <h2 className="text-2xl font-black uppercase italic tracking-tight">
              Educational Pathway
            </h2>
          </div>
          <div className="space-y-8">
            <div className="relative pl-6 border-l border-cyan-400/30">
              <h3 className="font-bold text-xl uppercase">
                Studies in Electrical Engineering
              </h3>
              <p className="text-gray-500">FH South Westphalia, Soest</p>
              <p className="text-sm mt-2 text-gray-400">
                Focus on technical mathematics and physical principles.
              </p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <h3 className="font-bold text-xl uppercase">
                Technical High School
              </h3>
              <p className="text-gray-500">Douala, Cameroon</p>
              <p className="text-sm mt-2 text-gray-400">
                Specialization: Refrigeration, Mechanics and Electrical
                Engineering.
              </p>
            </div>
          </div>
        </BentoBox>

        <BentoBox className="md:col-span-4 bg-cyan-400/5 border-cyan-400/10">
          <h2 className="text-xl font-black uppercase italic mb-8 flex items-center gap-2">
            <FaCode className="text-cyan-400" /> Stack
          </h2>
          <div className="space-y-6 text-sm">
            {[
              { label: "Languages", value: "JS, Dart, HTML5, CSS3" },
              {
                label: "Frameworks",
                value: "React, Next.js, Flutter, Node.js",
              },
              { label: "Tools", value: "Git, AWS, Firebase, Docker" },
            ].map((skill, i) => (
              <div key={i} className="border-b border-white/5 pb-4">
                <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] mb-1">
                  {skill.label}
                </p>
                <p className="text-gray-300">{skill.value}</p>
              </div>
            ))}
          </div>
        </BentoBox>

        <BentoBox className="md:col-span-12 h-[500px] p-0 overflow-hidden relative group">
          <div className="absolute top-8 left-8 z-20 pointer-events-none">
            <p className="text-cyan-400 font-black uppercase text-[10px] tracking-[0.3em]">
              Interactive Workspace
            </p>
            <h2 className="text-3xl font-black italic uppercase">
              Digital Engine
            </h2>
          </div>
          <Canvas
            className="bg-gradient-to-b from-[#0A0A0A] to-black"
            camera={{ position: [-7, 5, 10], fov: 45 }}
          >
            <ambientLight intensity={1.5} />
            <Environment preset="city" />
            <mesh position={[0, -1, 0]}>
              <boxGeometry args={[4, 0.2, 4]} />
              <meshStandardMaterial color="#22d3ee" opacity={0.1} transparent />
            </mesh>
            <Bureau url="/bureau.glb" position={[1, 0, 0]} />
            <ContactShadows opacity={0.4} scale={15} blur={2} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </BentoBox>
      </section>

      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-white/5 text-center">
        <div className="flex justify-center gap-8 mb-6 text-2xl text-gray-600">
          <a
            href="https://github.com/yvankraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl text-slate-400 hover:text-slate-800 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/yvan-ngone-271b2b30b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl text-slate-400 hover:text-slate-800 hover:scale-110" />
          </a>
          <a
            href="https://x.com/wildisyvan53?s=11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-4xl text-slate-400 hover:text-slate-800 hover:scale-110" />
          </a>
        </div>
        <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          © 2026 Yvan Wildis Ngone Tchinda
        </p>
      </footer>
    </div>
  );
};

export default MinimalistPortfolio;
