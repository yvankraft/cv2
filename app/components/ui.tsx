"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function BentoBox({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`bg-white border border-black/10 rounded-[2.5rem] p-8 hover:border-black/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
