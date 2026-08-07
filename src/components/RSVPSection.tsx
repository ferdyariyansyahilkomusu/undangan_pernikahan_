"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircleHeart, CheckCircle2, XCircle } from "lucide-react";
import { StatusKehadiran, Ucapan } from "@/types";
import SectionHeading from "./SectionHeading";

const initialUcapan: Ucapan[] = [
  {
    id: "1",
    nama: "Dewi & Fajar",
    status: "Hadir",
    pesan: "Selamat menempuh hidup baru! Semoga sakinah, mawaddah, warahmah.",
    waktu: "2 hari lalu",
  },
  {
    id: "2",
    nama: "Tante Ida",
    status: "Hadir",
    pesan: "Bahagia sekali mendengar kabar ini, semoga langgeng ya nak.",
    waktu: "5 hari lalu",
  },
];

export default function RSVPSection() {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState<StatusKehadiran>("Hadir");
  const [pesan, setPesan] = useState("");
  const [daftarUcapan, setDaftarUcapan] = useState<Ucapan[]>(initialUcapan);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) return;

    // NOTE: Ini menyimpan data hanya secara lokal (client-side).
    // Untuk produksi, hubungkan ke backend/Firebase/Google Sheets API
    // agar RSVP tersimpan permanen dan dapat dipantau panitia.
    const newUcapan: Ucapan = {
      id: Date.now().toString(),
      nama: nama.trim(),
      status,
      pesan: pesan.trim(),
      waktu: "Baru saja",
    };

    setDaftarUcapan([newUcapan, ...daftarUcapan]);
    setNama("");
    setPesan("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section className="relative bg-blush py-20 px-4">
      <SectionHeading
        eyebrow="RSVP"
        title="Konfirmasi & Ucapan"
        subtitle="Mohon konfirmasi kehadiran Anda dan sampaikan doa restu untuk kami."
      />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-ivory rounded-3xl p-6 shadow-lg shadow-sage-900/5 border border-gold-300/30"
      >
        <div className="mb-4">
          <label className="block font-body text-xs uppercase tracking-widest text-sage-700 mb-1.5">
            Nama
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            required
            className="w-full rounded-xl border border-sage-100 bg-white/70 px-4 py-2.5 text-sm font-body text-charcoal outline-none focus:border-gold-500 transition-colors"
          />
        </div>

        <div className="mb-4">
          <label className="block font-body text-xs uppercase tracking-widest text-sage-700 mb-1.5">
            Konfirmasi Kehadiran
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setStatus("Hadir")}
              className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-body border transition-colors ${
                status === "Hadir"
                  ? "bg-sage-600 border-sage-600 text-ivory"
                  : "border-sage-100 text-charcoal/70"
              }`}
            >
              <CheckCircle2 size={16} />
              Hadir
            </button>
            <button
              type="button"
              onClick={() => setStatus("Tidak Hadir")}
              className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-body border transition-colors ${
                status === "Tidak Hadir"
                  ? "bg-charcoal border-charcoal text-ivory"
                  : "border-sage-100 text-charcoal/70"
              }`}
            >
              <XCircle size={16} />
              Tidak Hadir
            </button>
          </div>
        </div>

        <div className="mb-5">
          <label className="block font-body text-xs uppercase tracking-widest text-sage-700 mb-1.5">
            Ucapan & Doa
          </label>
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tuliskan ucapan dan doa terbaik Anda..."
            required
            rows={3}
            className="w-full rounded-xl border border-sage-100 bg-white/70 px-4 py-2.5 text-sm font-body text-charcoal outline-none focus:border-gold-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 transition-colors text-ivory py-3 text-sm font-body tracking-wide"
        >
          <Send size={16} />
          Kirim Ucapan
        </button>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center text-sage-600 text-xs font-body mt-3"
            >
              Terima kasih! Ucapan Anda telah terkirim.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>

      {/* Wishes list */}
      <div className="max-w-md mx-auto mt-8 space-y-3 max-h-80 overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {daftarUcapan.map((u) => (
            <motion.div
              key={u.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-ivory/70 border border-gold-300/20 p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-sage-900">
                  {u.nama}
                </p>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-body tracking-wide ${
                    u.status === "Hadir"
                      ? "bg-sage-100 text-sage-700"
                      : "bg-charcoal/10 text-charcoal/60"
                  }`}
                >
                  {u.status}
                </span>
              </div>
              <p className="font-body text-sm text-charcoal/70 mt-1.5 leading-relaxed">
                {u.pesan}
              </p>
              <p className="font-body text-[11px] text-charcoal/40 mt-2">
                {u.waktu}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 text-gold-500">
        <MessageCircleHeart size={22} />
      </div>
    </section>
  );
}
