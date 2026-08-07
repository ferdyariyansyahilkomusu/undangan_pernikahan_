"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Gift, Wallet } from "lucide-react";
import { RekeningBank } from "@/types";
import SectionHeading from "./SectionHeading";

interface GiftSectionProps {
  rekening: RekeningBank[];
}

export default function GiftSection({ rekening }: GiftSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async (nomor: string, index: number) => {
    try {
      await navigator.clipboard.writeText(nomor);
    } catch {
      // Fallback for browsers without Clipboard API permission
      const textarea = document.createElement("textarea");
      textarea.value = nomor;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopiedIndex(index);
    setShowToast(true);
    setTimeout(() => setCopiedIndex(null), 2000);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <section className="relative bg-ivory py-20 px-4">
      <SectionHeading
        eyebrow="Wedding Gift"
        title="Amplop Digital"
        subtitle="Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Jika ingin memberi tanda kasih, kami sediakan amplop digital berikut."
      />

      <div className="max-w-md mx-auto space-y-4">
        {rekening.map((r, i) => (
          <motion.div
            key={r.nomor}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center justify-between gap-4 rounded-2xl border border-gold-300/40 bg-white/60 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
                <Wallet size={20} />
              </div>
              <div>
                <p className="font-display text-lg text-sage-900 leading-none">
                  {r.bank}
                </p>
                <p className="font-body text-sm text-charcoal/70 mt-1 tracking-wide">
                  {r.nomor}
                </p>
                <p className="font-body text-xs text-charcoal/50">
                  a.n. {r.atasNama}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopy(r.nomor, i)}
              className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-ivory transition-colors px-3.5 py-2 text-xs font-body"
              aria-label={`Salin nomor rekening ${r.bank}`}
            >
              {copiedIndex === i ? (
                <>
                  <Check size={14} /> Tersalin
                </>
              ) : (
                <>
                  <Copy size={14} /> Salin
                </>
              )}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-8 text-sage-500">
        <Gift size={22} />
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-50 rounded-full bg-sage-900 text-ivory px-5 py-3 text-sm font-body shadow-xl flex items-center gap-2"
          >
            <Check size={16} className="text-gold-300" />
            Berhasil disalin!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
