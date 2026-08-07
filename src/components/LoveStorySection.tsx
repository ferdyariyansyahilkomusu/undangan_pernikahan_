"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StoryMoment } from "@/types";
import SectionHeading from "./SectionHeading";

interface LoveStorySectionProps {
  moments: StoryMoment[];
}

function StoryCard({ moment, delay }: { moment: StoryMoment; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="w-full rounded-3xl bg-ivory border border-gold-300/40 shadow-lg shadow-sage-900/5 overflow-hidden"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={moment.fotoUrl}
          alt={moment.judul}
          fill
          sizes="(max-width: 640px) 90vw, 320px"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="font-body text-xs text-gold-600 tracking-widest uppercase">
          {moment.tanggal}
        </span>
        <h3 className="font-display text-2xl text-sage-900 mt-1">
          {moment.judul}
        </h3>
        <div className="w-10 h-px bg-gold-line my-3" />
        <p className="font-body text-sm text-charcoal/70 leading-relaxed">
          {moment.cerita}
        </p>
      </div>
    </motion.div>
  );
}

export default function LoveStorySection({ moments }: LoveStorySectionProps) {
  if (!moments || moments.length === 0) return null;

  return (
    <section className="relative bg-ivory py-20 px-4">
      <SectionHeading
        eyebrow="Our Journey"
        title="Kisah Kami"
        subtitle="Sepenggal cerita perjalanan kami sebelum melangkah ke hari bahagia ini."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {moments.map((moment, i) => (
          <StoryCard key={moment.id} moment={moment} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
}