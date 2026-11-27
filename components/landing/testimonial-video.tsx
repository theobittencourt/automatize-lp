"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

type TestimonialVideoProps = {
  src: string;
  poster: string;
  aspect?: string;
  label: string;
  className?: string;
  // para listas com muitos vídeos: só baixa e toca o que está visível na tela
  playWhenVisible?: boolean;
};

export function TestimonialVideo({
  src,
  poster,
  aspect,
  label,
  className,
  playWhenVisible = false,
}: TestimonialVideoProps) {
  const t = useTranslations("SocialProof.carousel");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!playWhenVisible || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.6) {
          video.pause();
        } else if (video.muted) {
          // com som ligado, quem decide dar play de novo é o visitante.
          // O play() pode ser recusado pelo navegador (ex.: economia de dados).
          video.play().catch(() => {});
        }
      },
      { threshold: [0, 0.6] }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [playWhenVisible]);

  function handleActivate() {
    const video = videoRef.current;
    if (!video) return;

    if (playWhenVisible) {
      // evita dois depoimentos com áudio ao mesmo tempo
      document.querySelectorAll("video").forEach((other) => {
        if (other !== video && !other.muted) other.pause();
      });
    }

    video.currentTime = 0;
    video.muted = false;
    video.loop = false;
    video.play();
    setActive(true);
  }

  return (
    <div
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-shadow duration-300 ease-premium hover:shadow-lg",
        className
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <video
        ref={videoRef}
        className="size-full object-cover"
        src={src}
        poster={poster}
        autoPlay={!playWhenVisible}
        muted
        loop
        playsInline
        controls={active}
        preload={playWhenVisible ? "none" : "metadata"}
        aria-label={label}
        onPause={() => {
          if (videoRef.current?.ended) setActive(false);
        }}
      />

      {!active && (
        <button
          type="button"
          onClick={handleActivate}
          aria-label={t("activateSound", { label })}
          className="absolute inset-0 flex items-end justify-end bg-black/0 p-3 transition-colors hover:bg-black/10"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 ease-premium group-hover:scale-110">
            <Volume2 className="size-4" />
          </span>
        </button>
      )}
    </div>
  );
}
