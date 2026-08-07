"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WeddingData } from "@/types";
import FloatingElements from "./FloatingElements";

interface HeroSectionProps {
  data: WeddingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-sage-900 text-ivory px-6">
      <FloatingElements />

      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="eyebrow text-xs text-gold-300 font-body relative z-10"
      >
        WE ARE GETTING MARRIED
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-10 font-display text-6xl sm:text-7xl mt-5 text-center"
      >
        {data.mempelaiPria.namaPanggilan}
        <span className="font-script text-gold-300 text-5xl mx-3">&</span>
        {data.mempelaiWanita.namaPanggilan}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-24 h-px bg-gold-line my-6"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 font-body tracking-[0.3em] text-sm text-ivory/80"
      >
        {data.tanggalSingkat}
      </motion.p>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 z-10 text-gold-300"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
