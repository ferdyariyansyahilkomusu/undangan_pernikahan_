"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music2, Pause } from "lucide-react";

export interface MusicPlayerHandle {
  /** Panggil dari user-gesture (misal tombol "Buka Undangan")
   *  supaya browser HP mengizinkan audio autoplay. */
  play: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerHandle>((_props, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    },
  }));

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-song.mp3" loop preload="none" />

      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-sage-900/90 backdrop-blur-sm border border-gold-300/50 shadow-lg flex items-center justify-center text-gold-300"
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={
            isPlaying
              ? { duration: 6, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
        >
          {isPlaying ? <Pause size={18} /> : <Music2 size={18} />}
        </motion.div>
      </motion.button>
    </>
  );
});

MusicPlayer.displayName = "MusicPlayer";
export default MusicPlayer;