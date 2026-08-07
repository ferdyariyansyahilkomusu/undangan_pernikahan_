"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Mempelai } from "@/types";
import SectionHeading from "./SectionHeading";

interface CoupleSectionProps {
  pria: Mempelai;
  wanita: Mempelai;
}

function ProfileCard({ person, delay }: { person: Mempelai; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-6"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-ivory shadow-xl shadow-sage-900/10 ring-1 ring-gold-300">
        <Image
          src={person.fotoUrl}
          alt={person.namaLengkap}
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>
      <h3 className="font-display text-3xl text-sage-900 mt-5">
        {person.namaLengkap}
      </h3>
      <p className="font-body text-xs text-gold-600 tracking-widest mt-1 uppercase">
        {person.anakKe}
      </p>
      <p className="font-body text-sm text-charcoal/70 mt-3 leading-relaxed max-w-[220px]">
        {person.sebutan} dari Bapak {person.namaAyah} <br /> &amp; Ibu{" "}
        {person.namaIbu}
      </p>
      {person.instagram && (
        <a
          href={`https://instagram.com/${person.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs text-sage-600 hover:text-gold-600 transition-colors"
        >
          <Instagram size={14} />@{person.instagram}
        </a>
      )}
    </motion.div>
  );
}

export default function CoupleSection({ pria, wanita }: CoupleSectionProps) {
  return (
    <section className="relative bg-ivory py-20 px-4">
      <SectionHeading
        eyebrow="The Couple"
        title="Mempelai"
        subtitle="Dengan penuh syukur, kami mengundang Bapak/Ibu/Saudara/i untuk turut merayakan hari bahagia kami."
      />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-6 max-w-3xl mx-auto">
        <ProfileCard person={pria} delay={0} />
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-script text-5xl text-gold-500 shrink-0"
        >
          &
        </motion.span>
        <ProfileCard person={wanita} delay={0.15} />
      </div>
    </section>
  );
}
