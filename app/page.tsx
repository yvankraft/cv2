"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Bureau({
  url,
  position,
}: {
  url: string;
  position: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  return (
    <primitive
      ref={meshRef}
      object={scene.clone()}
      position={position}
      scale={0.05}
    />
  );
}

const page = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  return (
    <div className="p-2">
      <section className="grid grid-cols-6 ">
        <div className="grid col-span-4 grid-rows-2 w-full p-1 gap-2">
          <div className="flex bg-slate-50 dark:bg-black row-span-1 justify-end items-end border-2 border-gray-300 rounded-2xl p-4 gap-2">
            <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100 uppercase">
              Yvan Wildis <br /> Ngone Tchinda
            </h1>
            <p></p>
            <img
              src="/picture.heic"
              alt="profile picture"
              className="h-[35vh] rounded-2xl border-2 border-gray-300 "
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3 row-span-2 h-full p-4 border-2 border-gray-200 rounded-2xl  ">
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
            </div>
            <div className="col-span-2 row-span-2 dark:bg-white/20 h-full p-4 border-2 border-gray-300 rounded-2xl bg-slate-200 ">
              <a className="text-blue-400" href="mailto:yvanngone53@gmail.com">
                yvanngone53@gmail.com
              </a>
              <br />
              <a href="tel:+4915757528515">+4915757528515</a>
              <p>Hamm</p>
            </div>
          </div>
        </div>
        <div className="grid col-span-2 p-4 dark:bg-black border-2 border-gray-300 bg-slate-50 rounded-2xl ">
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
        </div>
      </section>
      <section
        className={`h-[60vh] ${isGrabbing ? "cursor-grabbing" : "cursor-pointer"}`}
        onPointerDown={() => setIsGrabbing(true)}
        onPointerUp={() => setIsGrabbing(false)}
      >
        <Canvas camera={{ position: [-7, 3, 9], fov: 50 }}>
          <Bureau url="/bureau.glb" position={[1, 0, 0]} />
          <OrbitControls enableZoom={false} />
          <Environment preset="apartment" />
        </Canvas>
      </section>
    </div>
  );
};

export default page;
