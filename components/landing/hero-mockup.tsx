"use client";

import { useRef } from "react";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";

export function HeroMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 25%"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0], {
    ease: easeOut,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1], {
    ease: easeOut,
  });

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          transformStyle: "preserve-3d",
          willChange: "transform",
          backgroundImage:
            "linear-gradient(160deg, color-mix(in oklab, var(--brand) 35%, transparent), transparent 60%), url(/images/textures/gradient-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mx-auto mt-8 w-full max-w-3xl rounded-3xl p-2 shadow-2xl shadow-brand/10 sm:p-3"
      >
        <video
          className="aspect-video w-full rounded-2xl border border-white/10 object-cover"
          src="/images/hero-video.mp4"
          poster="/images/hero-video-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </motion.div>
    </div>
  );
}
