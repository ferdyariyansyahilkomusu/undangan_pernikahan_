"use client";

import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";
import { WeddingData } from "@/types";

interface CoverSectionProps {
  data: WeddingData;
  guestName: string;
  onOpen: () => void;
}

export default function CoverSection({
  data,
  guestName,
  onOpen,
}: CoverSectionProps) {
  const initials = `${data.mempelaiPria.namaPanggilan[0]}${data.mempelaiWanita.namaPanggilan[0]}`;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Left panel */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-1/2 h-full bg-ivory bg-grain border-r border-gold-300/40"
      />
      {/* Right panel */}
      <motion.div
        initial={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-1/2 h-full bg-ivory bg-grain border-l border-gold-300/40"
      />

      {/* Centered content, fades out as panels part */}
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="eyebrow text-xs text-gold-600 font-body">
            THE WEDDING OF
          </span>

          {/* Wax-seal style monogram */}
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="my-6 w-24 h-24 rounded-full border border-gold-500 flex items-center justify-center"
          >
            <span className="font-script text-4xl text-gold-600">
              {initials}
            </span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl text-sage-900 leading-tight">
            {data.mempelaiPria.namaPanggilan}
            <span className="font-script text-gold-500 text-4xl mx-2">
              &amp;
            </span>
            {data.mempelaiWanita.namaPanggilan}
          </h1>

          <div className="w-16 h-px bg-gold-line my-5" />

          <p className="font-body text-sm tracking-widest text-charcoal/70">
            {data.tanggalPenuh.toUpperCase()}
          </p>

          <div className="mt-10 font-body text-xs text-charcoal/60">
            <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <p className="font-display text-lg text-sage-700 mt-1">
              {guestName}
            </p>
          </div>

          <motion.button
            onClick={onOpen}
            whileTap={{ scale: 0.95 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-sage-600 px-7 py-3 text-ivory shadow-lg shadow-sage-900/20 font-body text-sm tracking-wide"
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <MailOpen size={18} />
            Buka Undangan
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
