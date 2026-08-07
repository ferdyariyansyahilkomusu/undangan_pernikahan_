"use client";

import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";
import { NarahubungPerson } from "@/types";
import SectionHeading from "./SectionHeading";

interface ContactSectionProps {
  narahubung: NarahubungPerson[];
}

export default function ContactSection({ narahubung }: ContactSectionProps) {
  const buildWhatsappUrl = (nomor: string, nama: string) => {
    const pesan = encodeURIComponent(
      `Halo ${nama}, saya ingin bertanya seputar acara pernikahan.`
    );
    return `https://wa.me/${nomor}?text=${pesan}`;
  };

  return (
    <section className="relative bg-ivory py-20 px-4">
      <SectionHeading
        eyebrow="Contact Person"
        title="Narahubung"
        subtitle="Ada pertanyaan seputar acara? Silakan hubungi kami melalui WhatsApp."
      />

      <div className="max-w-md mx-auto space-y-4">
        {narahubung.map((p, i) => (
          <motion.div
            key={p.nomorWhatsapp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center justify-between gap-4 rounded-2xl border border-gold-300/40 bg-white/60 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
                <User size={20} />
              </div>
              <div>
                <p className="font-display text-lg text-sage-900 leading-none">
                  {p.nama}
                </p>
                <p className="font-body text-xs text-charcoal/60 mt-1">
                  {p.peran}
                </p>
              </div>
            </div>

            <a
              href={buildWhatsappUrl(p.nomorWhatsapp, p.nama)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-sage-600 hover:bg-sage-700 transition-colors text-ivory px-3.5 py-2 text-xs font-body"
              aria-label={`Hubungi ${p.nama} via WhatsApp`}
            >
              <MessageCircle size={14} />
              Chat
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
