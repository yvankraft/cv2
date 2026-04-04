"use client";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import SeeMoreButton from "./components/SeeMoreButton";
import { motion } from "framer-motion";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Bureau({
  url,
  position,
}: {
  url: string;
  position: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);

  // 1. Charger les animations liées au groupe
  const { actions } = useAnimations(animations, meshRef);

  useEffect(() => {
    // On vérifie si des animations existent
    if (animations && animations.length > 0 && actions) {
      // On récupère le nom du premier clip ("Take 001")
      const animName = animations[0].name;

      // On lance l'action correspondante
      actions[animName]?.play();
      console.log("Animation lancée :", animName);
    }
  }, [actions]);

  return (
    <primitive ref={meshRef} object={scene} position={position} scale={0.06} />
  );
}

const page = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Yvan Wildis Ngone Tchinda Lebenslauf.pdf"; // Chemin vers votre fichier PDF dans le dossier public
    link.download = "Yvan Wildis Ngone Tchinda Lebenslauf.pdf"; // Nom du fichier lors du téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-2">
      <section className="grid md:grid-cols-6 ">
        <div className="md:grid md:col-span-4 md:grid-rows-2 w-full p-1 gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="flex bg-slate-50 dark:bg-black row-span-1 justify-end items-end border-2 border-gray-300 rounded-2xl p-4 gap-2"
          >
            <h1 className="md:text-6xl inset-0 font-bold text-slate-900 dark:text-slate-100 uppercase">
              Yvan Wildis <br /> Ngone Tchinda
            </h1>

            <img
              src="/picture.jpg"
              alt="profile picture"
              className="h-[35vh] rounded-2xl border-2 border-gray-300 "
            />
          </motion.div>
          <div className="md:grid grid-cols-5 gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className="col-span-3 row-span-2 h-full p-4 border-2 border-gray-200 rounded-2xl "
            >
              <h1 className="text-xl font-bold">Profile</h1>
              <p>
                Passionate full-stack developer and electrical engineering
                student with in-depth knowledge of web development and Flutter.
                I combine technical systems understanding with practical
                experience in implementing and publishing independent projects
                (Vercel, GitHub). As a solution-oriented and resilient team
                player, I am motivated to contribute my programming skills and
                technical understanding to innovative projects and actively
                shape the digital transformation.{" "}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-evenly flex-col col-span-2 row-span-2 dark:bg-white/20 h-full p-4 border-2 border-gray-300 rounded-2xl bg-slate-200 break-words"
            >
              <h1 className="text-2xl font-bold">Contact</h1>
              <a>yvanngone53@gmail.com</a>
              <a>+4915757528515</a>
              <p>Hamm</p>
              <button
                onClick={handleDownload}
                className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-2xl"
              >
                Download CV
              </button>
              <div className="justify-evenly space-x-4 flex">
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
              <p className="text-center text-slate-400 hidden md:block text-sm">
                &copy; 2025 Yvan Wildis Ngone Tchinda
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="grid col-span-2 p-4 dark:bg-black border-2 border-gray-300 bg-slate-50 rounded-2xl "
        >
          <h1 className="font-bold">EDUCATIONAL PATHWAY</h1>
          <h2 className="font-bold">STUDIES IN ELECTRICAL ENGINEERING</h2>
          <h3 className="font-bold">FH South Westphalia, Soest</h3>
          <ul className="list-disc list-inside text-sm">
            <li>
              Focus on technical mathematics, physical principles and problem
              solving.
            </li>
            <li>Safe handling of complex technical plans and calculations</li>
          </ul>
          <br />
          <h1 className="font-bold">
            Technical college entrance qualification (Technical college entrance
            qualification) – Specialization: Refrigeration and air conditioning
            technology
          </h1>
          <p className="text-sm">
            989 Technical High School Nylon Ndogpassi, Douala (Cameroon)
            Specializations: Thermodynamics, Engineering Mechanics, and
            Electrical Engineering.
            <br />
            <span className="font-bold">Main areas of focus:</span>{" "}
            Thermodynamics, technical mechanics and electrical engineering.
          </p>
          <br />

          <h1 className="font-bold">SKILLS</h1>
          <ul className="text-sm">
            <li>
              <span className="font-bold">Programming Languages:</span>{" "}
              JavaScript, Dart (Flutter), HTML5, CSS3, React, Next.js
            </li>
            <li>
              <span className="font-bold">Frameworks & Libraries:</span> React,
              Node.js, Express, Flutter
            </li>
            <li>
              <span className="font-bold">Tools & Technologies:</span> Git,
              Docker, AWS, Firebase
            </li>
            <li>
              <span className="font-bold">Office software:</span> MS Office
              (Word, Excel, PowerPoint)
            </li>
            <li>
              <span className="font-bold">Tools:</span> Git, GitHub, Vercel, VS
              Code, Figma.
            </li>
            <li>
              <span className="font-bold">Languages:</span> French, English,
              German
            </li>
          </ul>
        </motion.div>
      </section>
      <section
        className={`h-[60vh] ${isGrabbing ? "cursor-grabbing" : "cursor-pointer"}`}
        onPointerDown={() => setIsGrabbing(true)}
        onPointerUp={() => setIsGrabbing(false)}
      >
        <Canvas
          className=" inset-0"
          camera={{ position: [-7, 4.5, 9], fov: 50 }}
        >
          <Bureau url="/bureau.glb" position={[1, 0, 0]} />
          <OrbitControls enableZoom={false} />
          <Environment preset="apartment" />
        </Canvas>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        className="w-80% mx-auto mt-4 border-2 border-gray-300 rounded-2xl  bg-slate-50 dark:bg-black overflow-hidden mb-10"
      >
        <img src="/pf.png" alt="image" />
        <div className="flex flex-col justify-evenly p-4 ">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 uppercase p-4">
            PROJECTS
          </h1>
          <p className="p-4">
            <span className="font-bold">Personal Portfolio Website:</span> A
            personal portfolio website built with React and Next.js, showcasing
            my projects, skills, and experience. The website is designed to be
            responsive and visually appealing, providing an engaging user
            experience.
          </p>
          <SeeMoreButton href="https://pfwildis1.vercel.app" text="See More" />
        </div>
      </motion.section>
    </div>
  );
};

export default page;
