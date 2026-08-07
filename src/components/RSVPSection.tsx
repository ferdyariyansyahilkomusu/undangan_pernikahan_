"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircleHeart,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
  limit,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { StatusKehadiran, Ucapan } from "@/types";
import { formatWaktuRelatif } from "@/lib/formatwaktu";
import SectionHeading from "./SectionHeading";

// Nama koleksi Firestore tempat semua RSVP & ucapan disimpan.
const COLLECTION_NAME = "ucapan";

export default function RSVPSection() {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState<StatusKehadiran>("Hadir");
  const [pesan, setPesan] = useState("");
  const [daftarUcapan, setDaftarUcapan] = useState<Ucapan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Dengarkan koleksi "ucapan" secara real-time — begitu ada RSVP baru
  // (dari siapa pun, di perangkat mana pun), daftar ini langsung ter-update
  // tanpa perlu refresh halaman.
  useEffect(() => {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data: Ucapan[] = snapshot.docs.map((doc) => {
          const d = doc.data();
          const createdAtMs =
            (d.createdAt as Timestamp | undefined)?.toMillis() ?? Date.now();
          return {
            id: doc.id,
            nama: d.nama,
            status: d.status,
            pesan: d.pesan,
            waktu: formatWaktuRelatif(createdAtMs),
            createdAtMs,
          };
        });
        setDaftarUcapan(data);
        setIsLoading(false);
      },
      (error) => {
        console.error("Gagal memuat ucapan:", error);
        setErrorMsg(
          "Gagal memuat daftar ucapan. Periksa koneksi atau konfigurasi Firebase."
        );
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      await addDoc(collection(db, COLLECTION_NAME), {
        nama: nama.trim(),
        status,
        pesan: pesan.trim(),
        createdAt: serverTimestamp(),
      });

      setNama("");
      setPesan("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
    } catch (error) {
      console.error("Gagal mengirim ucapan:", error);
      setErrorMsg("Gagal mengirim ucapan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
            className="w-full rounded-xl border border-sage-100 bg-white/70 px-4 py-2.5 text-sm font-body text-charcoal outline-none focus:border-gold-500 transition-colors disabled:opacity-60"
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
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-body border transition-colors disabled:opacity-60 ${
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
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-sm font-body border transition-colors disabled:opacity-60 ${
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
            disabled={isSubmitting}
            rows={3}
            className="w-full rounded-xl border border-sage-100 bg-white/70 px-4 py-2.5 text-sm font-body text-charcoal outline-none focus:border-gold-500 transition-colors resize-none disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 rounded-full bg-gold-500 hover:bg-gold-600 transition-colors text-ivory py-3 text-sm font-body tracking-wide disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send size={16} />
              Kirim Ucapan
            </>
          )}
        </button>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center text-sage-600 text-xs font-body mt-3"
            >
              Terima kasih! Ucapan Anda telah tersimpan.
            </motion.p>
          )}
          {errorMsg && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center text-red-500 text-xs font-body mt-3"
            >
              {errorMsg}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>

      {/* Wishes list */}
      <div className="max-w-md mx-auto mt-8 space-y-3 max-h-80 overflow-y-auto pr-1">
        {isLoading && (
          <div className="flex items-center justify-center gap-2 text-sage-600 text-sm font-body py-6">
            <Loader2 size={16} className="animate-spin" />
            Memuat ucapan...
          </div>
        )}

        {!isLoading && daftarUcapan.length === 0 && !errorMsg && (
          <p className="text-center text-charcoal/50 text-sm font-body py-6">
            Jadilah yang pertama mengirim ucapan!
          </p>
        )}

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