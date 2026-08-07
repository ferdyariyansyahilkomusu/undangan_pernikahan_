"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { WeddingData } from "@/types";
import FloatingElements from "./FloatingElements";

interface FooterProps {
  data: WeddingData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="relative bg-sage-900 text-ivory py-20 px-6 text-center overflow-hidden">
      <FloatingElements />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-md mx-auto"
      >
        <p className="font-body text-sm text-ivory/80 leading-relaxed italic">
          &ldquo;{data.quote.teks}&rdquo;
        </p>
        <p className="font-body text-xs text-gold-300 mt-3 tracking-widest">
          {data.quote.sumber}
        </p>

        <div className="w-16 h-px bg-gold-line mx-auto my-8" />

        <p className="font-display text-3xl">
          {data.mempelaiPria.namaPanggilan}
          <span className="font-script text-gold-300 text-2xl mx-2">&</span>
          {data.mempelaiWanita.namaPanggilan}
        </p>

        <p className="font-body text-xs text-ivory/60 mt-4 leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>

        <div className="flex items-center justify-center gap-1.5 mt-8 text-gold-300 text-xs font-body">
          Dibuat dengan <Heart size={12} className="fill-gold-300" /> untuk
          hari bahagia kami
        </div>
      </motion.div>
    </footer>
  );
}
