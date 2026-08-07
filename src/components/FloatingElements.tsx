"use client";

import { motion } from "framer-motion";

/**
 * Purely decorative ambient layer: soft floating gold dots and a thin
 * botanical line-art sprig. Pointer-events disabled so it never blocks taps.
 */
export default function FloatingElements() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute top-[8%] left-[6%] w-2 h-2 rounded-full bg-gold-500/40"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[22%] right-[10%] w-1.5 h-1.5 rounded-full bg-sage-500/40"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[18%] left-[12%] w-1 h-1 rounded-full bg-gold-500/50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        className="absolute -bottom-6 -right-8 w-40 h-40 text-sage-300/50"
        viewBox="0 0 100 100"
        fill="none"
        animate={{ rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M10 90 C 30 70, 30 40, 55 15"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M55 15 C 50 25, 40 28, 33 22"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M45 35 C 40 42, 30 44, 24 38"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M35 55 C 30 62, 20 63, 15 58"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.svg>
    </div>
  );
}
