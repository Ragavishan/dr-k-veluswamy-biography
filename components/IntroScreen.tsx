
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function IntroScreen() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  const closeIntro = () => {
    setShowIntro(false);
  };

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden">
      {/* Full-screen paper turning */}
      <div
        className="absolute inset-0"
        style={{ perspective: "2200px" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
          }}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -180 }}
          transition={{
            delay: 2,
            duration: 2,
            ease: [0.7, 0, 0.3, 1],
          }}
          onAnimationComplete={closeIntro}
        >
          {/* Front: exact uploaded image */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/intro-book.png"
              alt="Dr. K. Veluswamy — A 40-Year Life Journey"
              className="h-full w-full object-cover object-center"
              draggable={false}
            />

            {/* Paper shadows */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-black/35 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[3%] bg-gradient-to-l from-black/20 to-transparent" />
          </div>

          {/* Back: paper texture */}
          <div
            className="absolute inset-0 bg-[#d9b77d]"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(92,55,20,0.035) 6px)",
              boxShadow: "inset 0 0 70px rgba(75,42,12,0.25)",
            }}
          >
            <div className="absolute inset-0 border-[14px] border-[#b78b50]/30 sm:border-[24px]" />
          </div>
        </motion.div>
      </div>

      {/* Skip button */}
      <button
        onClick={closeIntro}
        className="absolute right-5 top-5 z-20 rounded-full border border-amber-100/60 bg-black/60 px-5 py-3 text-sm text-amber-50 backdrop-blur-sm hover:bg-black/80"
      >
        Skip Intro →
      </button>
    </div>
  );
}
