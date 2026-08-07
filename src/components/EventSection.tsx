"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { DetailAcara, WeddingData } from "@/types";
import SectionHeading from "./SectionHeading";
import Countdown from "./Countdown";

interface EventSectionProps {
  data: WeddingData;
}

function EventCard({ acara, delay }: { acara: DetailAcara; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="w-full max-w-sm rounded-3xl bg-ivory border border-gold-300/40 shadow-lg shadow-sage-900/5 p-7"
    >
      <h3 className="font-display text-2xl text-sage-900 text-center">
        {acara.namaAcara}
      </h3>
      <div className="w-10 h-px bg-gold-line mx-auto my-4" />

      <div className="space-y-3 font-body text-sm text-charcoal/80">
        <div className="flex items-start gap-3">
          <Calendar size={18} className="text-gold-600 shrink-0 mt-0.5" />
          <span>{acara.tanggal}</span>
        </div>
        <div className="flex items-start gap-3">
          <Clock size={18} className="text-gold-600 shrink-0 mt-0.5" />
          <span>
            {acara.jamMulai} &ndash; {acara.jamSelesai} WIB
          </span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-gold-600 shrink-0 mt-0.5" />
          <span>
            <strong className="text-sage-900">{acara.lokasiNama}</strong>
            <br />
            {acara.alamatLengkap}
          </span>
        </div>
      </div>

      <a
        href={acara.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-sage-600 hover:bg-sage-700 transition-colors text-ivory py-2.5 text-sm font-body tracking-wide"
      >
        <Navigation size={16} />
        Lihat Lokasi
      </a>
    </motion.div>
  );
}

export default function EventSection({ data }: EventSectionProps) {
  return (
    <section className="relative bg-sage-900 py-20 px-4 overflow-hidden">
      <SectionHeading
        eyebrow="Save The Date"
        title="Detail Acara"
        light
      />

      <div className="mb-12">
        <Countdown targetIso={data.countdownTarget} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <EventCard acara={data.akad} delay={0} />
        <EventCard acara={data.resepsi} delay={0.15} />
      </div>
    </section>
  );
}
