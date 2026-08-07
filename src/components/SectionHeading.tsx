"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center text-center mb-10"
    >
      <span
        className={`eyebrow text-xs font-body uppercase ${
          light ? "text-gold-300" : "text-gold-600"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl sm:text-5xl mt-3 ${
          light ? "text-ivory" : "text-sage-900"
        }`}
      >
        {title}
      </h2>
      <div className="w-20 h-px bg-gold-line mt-5" />
      {subtitle && (
        <p
          className={`font-body text-sm mt-4 max-w-xs leading-relaxed ${
            light ? "text-ivory/80" : "text-charcoal/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
