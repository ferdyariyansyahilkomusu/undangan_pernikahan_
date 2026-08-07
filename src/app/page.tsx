"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import GiftSection from "@/components/GiftSection";
import RSVPSection from "@/components/RSVPSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MusicPlayer, { MusicPlayerHandle } from "@/components/MusicPlayer";
import { weddingData } from "@/lib/data";
import LoveStorySection from "@/components/LoveStorySection";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");
  const musicRef = useRef<MusicPlayerHandle>(null);

  const handleOpen = () => {
    setIsOpened(true);
    musicRef.current?.play();
  };

  // Read ?to=Nama from the URL so each guest's link can be personalized,
  // e.g. https://domain.com/?to=Budi+%26+Keluarga
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) setGuestName(to);
  }, []);

  // Lock background scroll while the cover overlay is visible
  useEffect(() => {
    document.body.classList.toggle("invitation-locked", !isOpened);
  }, [isOpened]);

  return (
    <main className="relative">
      <AnimatePresence>
        {!isOpened && (
          <CoverSection
            data={weddingData}
            guestName={guestName}
            onOpen={handleOpen}
          />
        )}
      </AnimatePresence>

      <MusicPlayer ref={musicRef} />

      <HeroSection data={weddingData} />
      <CoupleSection
        pria={weddingData.mempelaiPria}
        wanita={weddingData.mempelaiWanita}
      />
      <LoveStorySection moments={weddingData.loveStory} /> 
      <EventSection data={weddingData} />
      <GiftSection rekening={weddingData.rekening} />
      <RSVPSection />
      <ContactSection narahubung={weddingData.narahubung} />
      <Footer data={weddingData} />
    </main>
  );
}