"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  hari: number;
  jam: number;
  menit: number;
  detik: number;
}

export function useCountdown(targetIso: string): TimeLeft {
  const calculate = (): TimeLeft => {
    const diff = +new Date(targetIso) - +new Date();
    if (diff <= 0) return { hari: 0, jam: 0, menit: 0, detik: 0 };
    return {
      hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
      jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
      menit: Math.floor((diff / 1000 / 60) % 60),
      detik: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    setTimeLeft(calculate());
    const timer = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso]);

  return timeLeft;
}
