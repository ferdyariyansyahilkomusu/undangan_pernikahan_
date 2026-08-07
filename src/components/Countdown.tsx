"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/lib/useCountdown";

interface CountdownProps {
  targetIso: string;
}

export default function Countdown({ targetIso }: CountdownProps) {
  const { hari, jam, menit, detik } = useCountdown(targetIso);

  const units = [
    { label: "Hari", value: hari },
    { label: "Jam", value: jam },
    { label: "Menit", value: menit },
    { label: "Detik", value: detik },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      {units.map((u, i) => (
        <motion.div
          key={u.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-ivory/10 border border-gold-300/30 backdrop-blur-sm"
        >
          <span className="font-display text-2xl sm:text-3xl text-gold-300 tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="font-body text-[10px] tracking-widest text-ivory/70 uppercase mt-0.5">
            {u.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
